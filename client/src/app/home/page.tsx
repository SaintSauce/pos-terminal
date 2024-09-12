import MenuBanner from '@/components/menu/MenuBanner'
import { HOME_PAGE_ITEMS } from '@/lib/constants'

const HomePage = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen p-16">
      <div className="grid grid-cols-2 w-full gap-8">
        {HOME_PAGE_ITEMS.map((item, index) => (
          <div key={index}>
            <MenuBanner title={item.title} color={item.color} href={item.href} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage