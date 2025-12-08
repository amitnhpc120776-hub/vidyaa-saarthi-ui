/* ========================================================================
   vs-avatar — Behavior (Step 4)
   ======================================================================== */
(() => {
  const statusTextMap = {
    'vs-avatar--status-online': 'Online',
    'vs-avatar--status-offline': 'Offline',
    'vs-avatar--status-away': 'Away',
    'vs-avatar--status-busy': 'Busy',
    'vs-avatar--status-custom': 'Custom status'
  };

  const initAvatar = (avatar) => {
    const image = avatar.querySelector('.vs-avatar__image');
    const initials = avatar.querySelector('.vs-avatar__initials');
    const icon = avatar.querySelector('.vs-avatar__icon');
    const statusLabel = avatar.querySelector('.vs-avatar__status-label');

    const updateStatusLabel = () => {
      if (!statusLabel) return;
      const statusClass = Array.from(avatar.classList).find((cls) => cls.startsWith('vs-avatar--status-'));
      const text = statusTextMap[statusClass] || statusLabel.textContent || '';
      statusLabel.textContent = text;
    };

    const handleImageLoad = () => {
      avatar.classList.remove('is-loading');
      avatar.classList.remove('is-fallback');
    };

    const handleImageError = () => {
      avatar.classList.add('is-fallback');
      avatar.classList.remove('is-loading');
      if (initials) {
        initials.setAttribute('aria-hidden', 'false');
      }
      if (icon) {
        icon.setAttribute('aria-hidden', initials ? 'true' : 'false');
      }
    };

    updateStatusLabel();

    if (image) {
      if (!image.complete) {
        avatar.classList.add('is-loading');
      }
      image.addEventListener('load', handleImageLoad);
      image.addEventListener('error', handleImageError);
    }

    return () => {
      if (image) {
        image.removeEventListener('load', handleImageLoad);
        image.removeEventListener('error', handleImageError);
      }
    };
  };

  document.addEventListener('DOMContentLoaded', () => {
    const avatars = document.querySelectorAll('.vs-avatar');
    const destroyHandlers = new WeakMap();

    avatars.forEach((avatar) => {
      const destroy = initAvatar(avatar);
      if (typeof destroy === 'function') {
        destroyHandlers.set(avatar, destroy);
      }
    });

    document.addEventListener('vs-avatar:destroy', (event) => {
      const target = event.detail?.target;
      const destroy = destroyHandlers.get(target);
      if (destroy) {
        destroy();
        destroyHandlers.delete(target);
      }
    });
  });
})();
