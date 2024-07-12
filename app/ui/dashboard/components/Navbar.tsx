// components/Navbar.tsx
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { navigation } from '@/app/data/navigation'
import classNames from '@/app/ui/dashboard/utils/classNames'

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40">
      <div className="flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'border-green-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-green-500 hover:text-gray-700',
                'inline-flex gap-x-3 items-center border-b-2 px-1 pt-1 text-sm font-medium',
              )}
            >
              <item.icon
                aria-hidden="true"
                className={classNames(
                  item.current ? 'text-green-600' : 'text-gray-400 group-hover:text-green-600',
                  'h-6 w-6 shrink-0',
                )}
              />
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar