import { Darklayout } from '@/components/layouts/Darklayout'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function About() {
  return (
    <>
      <span>Welcome About</span>
    </>
  )
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <Darklayout>{page}</Darklayout>
    </MainLayout>
  )
}
