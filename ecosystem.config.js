module.exports = {
  apps: [
    {
      name: 'vike',
      script: './express-entry.ts',
      exp_backoff_restart_delay: 100,
      max_memory_restart: '1G',
      max_restarts: 10,
      min_uptime: 2000,
    },
  ],
};