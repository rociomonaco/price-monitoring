import { NavLink as NavLinkRouter } from 'react-router-dom'

export const NavLink = ({
  title,
  to,
  section = 'aside',
  Icon,
  end = false
}) => {
  const getStyle = (section, isActive) => {
    switch (section) {
      case 'products':
        return 'bg-blue-600 text-white'
      default:
        return isActive
          ? 'bg-blue-600 text-white'
          : 'text-gray-700 hover:bg-blue-100'
    }
  }

  return (
    <NavLinkRouter to={to} end={end}>
      {({ isActive }) => {
        const fill = isActive ? '#fff' : '#374957'
        const className = getStyle(section, isActive)
        return (
          <div
            className={`flex justify-start items-center gap-2 p-2 rounded-md transition ease-in ${className}`}
          >
            {Icon && <span>{<Icon fill={fill} width={20} height={20} />}</span>}
            {title}
          </div>
        )
      }}
    </NavLinkRouter>
  )
}
