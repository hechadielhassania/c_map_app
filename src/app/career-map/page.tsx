import { ParentComponent } from '@/app/career-map/iframe-resizer-react-parent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Career Companion - Career Map',
}

export default async function CareerMapPage() {
  const firstBaseUrl = 'http://localhost:3000/#/default/pqx2z7vyylfzfdh/mwpk79i8rytrw6g'
  const homePage = 'http://localhost:3000/#/signin'

  const w01Base= 'http://localhost:3000/#/nc/pmw9w6urubuqn43/mh8sxq2ivb8qgb8'
  const calendarUrl = 'http://localhost:3000/#/default/pqx2z7vyylfzfdh/modvn3cpplxek5g/vwkv0cs2mo3f537j'
  return (
    <>
      <ParentComponent
        src={firstBaseUrl}
      />
    </>
  )
}
