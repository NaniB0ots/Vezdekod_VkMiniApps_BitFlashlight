import React, {useState, useEffect} from 'react';
import {
    AdaptivityProvider,
    AppRoot,
    SplitLayout,
    SplitCol,
    useAdaptivity,
    PanelHeader, ViewWidth
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import BitFlashlight from './panels/BitFlashlight'

const App = () => {
    const {viewWidth} = useAdaptivity();
    return (
        <AdaptivityProvider>
            <AppRoot>
                <SplitLayout header={<PanelHeader separator={false}/>}>
                    <SplitCol spaced={viewWidth > ViewWidth.MOBILE}>
                        <BitFlashlight/>
                    </SplitCol>
                </SplitLayout>

            </AppRoot>
        </AdaptivityProvider>
    )

}

export default App;
