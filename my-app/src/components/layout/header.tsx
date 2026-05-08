import { Link, NavLink } from 'react-router-dom';
import { BookOutlined, HomeOutlined, UsergroupAddOutlined } from '@ant-design/icons';
// import './header.css'
import { Menu } from 'antd';
import { useState } from 'react';
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];


const Header = () => {
  //4 phần tử của menu
  const items: MenuItem[] = [
  {
    label: <Link to={"/"}>Home</Link>,
    key: 'home', // ứng với class active, current == key => gạch dưới
    icon: <HomeOutlined />,
  },
  {
    label: <Link to={"/users"}>Users</Link>,
    key: 'users',
    icon: <UsergroupAddOutlined />,
    // disabled: true,
  },
  {
    label: <Link to={"/book"}>Books</Link>,
    key: 'products',
    icon: <BookOutlined />,
  },
];
const [current, setCurrent] = useState('');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
   <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
  );
};
// NavLink tự động thêm class active sáng xanh, mỗi lần click vào 1 trang, nó
// tự động thêm class active cho trang đó
export default Header;
