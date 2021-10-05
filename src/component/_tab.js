import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import CSS from '../../styles/link.module.css'

import About from './pages/about'
import Link from './pages/link-other'

export default function _tab() {
  return (
    <main>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>自己紹介</Tab>
          <Tab>お知らせ</Tab>
          <Tab>リンク・その他</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <About />
          </TabPanel>
          <TabPanel>
            <div className={CSS.cotent}>更新を行いました。 - 2021/10/05</div>
            <p>更新を行いました。ちょっとした変更です。</p>
          </TabPanel>
          <TabPanel>
            <Link />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  )
}
