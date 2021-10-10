import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

export default function about() {
  return (
    <main>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                名前
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>merunno</AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                年齢
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>16 * 2005/09/02</AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                勉強中の言語
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            TypeScript / JavaScript / Java / Python
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                ツール
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            JetBrains IDE. GitHub, Git, Markdownなど
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                運営参加
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <a
              href="https://twitter.com/BFJ_GG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>Battlefield Japan Community: </u>
            </a>
            運営・開発者
            <a
              href="https://twitter.com/AzisabaNetwork"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>アジ鯖: </u>
            </a>
            開発協力者・運営
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </main>
  )
}
