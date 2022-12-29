import { Fragment } from 'react';
import MainNavigtion from './main-navigation';

export default function Layout(props) {
    return (
        <Fragment>
            <MainNavigtion />
            <main>
                {props.children}
            </main>
        </Fragment>
    );
};