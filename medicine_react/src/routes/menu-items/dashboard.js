// assets
import { DashboardOutlined, ProfileOutlined, HomeOutlined, CloudUploadOutlined, SearchOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  ProfileOutlined,
  HomeOutlined,
  CloudUploadOutlined,
  SearchOutlined,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'navigation',
  type: 'group',
  children: [
    {
      id: 'landing',
      type: 'item',
      url: '/',
      icon: icons.HomeOutlined,
    }, {
      id: 'search',
      type: 'item',
      url: '/search',
      icon: icons.SearchOutlined,
    },
    {
      id: 'dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.DashboardOutlined,
    },
    {
      id: 'report',
      type: 'item',
      url: '/report',
      icon: icons.ProfileOutlined,
      // target: true //開啟於外部
    }, {
      id: 'upload',
      type: 'item',
      url: '/upload',
      icon: icons.CloudUploadOutlined,
    },
  ],
};

export default dashboard;
