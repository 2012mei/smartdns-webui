import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'dashboard', title: 'Dashboard', href: paths.dashboard.dashboard, icon: 'QueryStats'},
  { key: 'query-log', title: 'Query Log', href: paths.dashboard.queryLog, icon: 'EventNote' },
  { key: 'upstream-servers', title: 'Upstream Servers', href: paths.dashboard.upstreamServers, icon: 'Dns' },
  { key: 'log', title: 'Log', href: paths.dashboard.log, icon: 'Article' },
  { key: 'term', title: 'Terminal', href: paths.dashboard.term, icon: 'Terminal' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'Settings' },
] satisfies NavItemConfig[];
