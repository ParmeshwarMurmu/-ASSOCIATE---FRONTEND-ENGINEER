import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex } from '@chakra-ui/react'

const Trial = () => {
    return (
        <div>

            <Tabs variant='unstyled'>
                <Flex>
                    <TabList style={{'flexDirection': 'column'}}>
                        <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Tab 1</Tab>
                        <Tab _selected={{ color: 'white', bg: 'green.400' }}>Tab 2</Tab>

                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Flex>
            </Tabs>
        </div>
    )
}

export default Trial
