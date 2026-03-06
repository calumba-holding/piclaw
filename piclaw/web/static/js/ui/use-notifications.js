import { useCallback, useEffect, useRef, useState } from '../vendor/preact-htm.js';
import { getLocalStorageBoolean, setLocalStorageItem } from '../utils/storage.js';

export function useNotifications() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [notificationPermission, setNotificationPermission] = useState('default');
  const notificationsEnabledRef = useRef(false);

  useEffect(() => {
    const enabled = getLocalStorageBoolean('notificationsEnabled', false);
    notificationsEnabledRef.current = enabled;
    setNotificationsEnabled(enabled);
    if (typeof Notification !== 'undefined') {
      setNotificationPermission(Notification.permission);
    }
  }, []);

  useEffect(() => {
    notificationsEnabledRef.current = notificationsEnabled;
  }, [notificationsEnabled]);

  const requestNotificationPermission = useCallback(() => {
    if (typeof Notification === 'undefined') return Promise.resolve('denied');
    try {
      const result = Notification.requestPermission();
      if (result && typeof result.then === 'function') {
        return result;
      }
      return Promise.resolve(result);
    } catch {
      return Promise.resolve('default');
    }
  }, []);

  const toggleNotifications = useCallback(async () => {
    if (typeof window === 'undefined' || typeof Notification === 'undefined') return;
    if (!window.isSecureContext) {
      alert('Notifications require a secure context (HTTPS or installed app).');
      return;
    }
    if (Notification.permission === 'denied') {
      setNotificationPermission('denied');
      alert('Browser notifications are blocked. Enable them in your browser settings.');
      return;
    }
    if (Notification.permission === 'default') {
      const result = await requestNotificationPermission();
      setNotificationPermission(result || 'default');
      if (result !== 'granted') {
        notificationsEnabledRef.current = false;
        setNotificationsEnabled(false);
        setLocalStorageItem('notificationsEnabled', 'false');
        return;
      }
    }
    const next = !notificationsEnabledRef.current;
    notificationsEnabledRef.current = next;
    setNotificationsEnabled(next);
    setLocalStorageItem('notificationsEnabled', String(next));
  }, [requestNotificationPermission]);

  const notify = useCallback((title, body) => {
    if (!notificationsEnabledRef.current) return false;
    if (typeof Notification === 'undefined') return false;
    if (Notification.permission !== 'granted') return false;
    try {
      const notification = new Notification(title, { body });
      notification.onclick = () => {
        try {
          window.focus();
        } catch {
          // ignore
        }
      };
      return true;
    } catch {
      return false;
    }
  }, []);

  return {
    notificationsEnabled,
    notificationPermission,
    toggleNotifications,
    notify,
  };
}
