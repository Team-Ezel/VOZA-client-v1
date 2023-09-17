import { ReactNode } from 'react';
import MainPageBar from '@/components/Main/organisms/MainPageBar';
function MainLayout (props: { children: ReactNode }){
    return (
        <>
        <MainPageBar/>
        {props.children}
        </>
    )
}

export default MainLayout;