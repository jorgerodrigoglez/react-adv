//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/components/pages";
import { lazy, LazyExoticComponent } from 'react';
import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
import { FormikComponents } from '../03-forms/pages/FormikComponents';
import { FormikAbstraction } from '../03-forms/pages/FormikAbstraction';
import { RegisterFormikPage } from '../03-forms/pages/RegisterFormikPage';
import { DynamicForm } from '../03-forms/pages/DynamicForm';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    //Component: React.LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

// const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/components/pages/LazyPage1'));
// const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/components/pages/LazyPage2'));
// const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/components/pages/LazyPage3'));

const Shopping = lazy(() => import(/* webpackChunkName: "ShoppingPage" */ '../02-components-patterns/pages/ShoppingPage'));

// export const routes: Route[] = [
//     {
//         to: '/lazy1',
//         path: 'lazy1',
//         Component: Lazy1,
//         name: 'Home'
//     },
//     {
//         to: '/lazy2',
//         path: 'lazy2',
//         Component: Lazy2,
//         name: 'About'
//     },
//     {
//         to: '/lazy3',
//         path: 'lazy3',
//         Component: Lazy3,
//         name: 'Users'
//     }
// ]

export const routes: Route[] = [
    {
        to: '/shopping',
        path: 'shopping',
        Component: Shopping,
        name: 'Shopping'
    },
    {
        to: '/register',
        path: 'register',
        Component: RegisterPage,
        name: 'Register'
    },
    {
        to: '/formik_basic',
        path: 'formik_basic',
        Component: FormikBasicPage,
        name: 'Formik Basic Page'
    },
    {
        to: '/formik_yup',
        path: 'formik_yup',
        Component: FormikYupPage,
        name: 'Formik Yup Page'
    },
    {
        to: '/formik_components',
        path: 'formik_components',
        Component: FormikComponents,
        name: 'Formik Components'
    },
    {
        to: '/formik_abstraction',
        path: 'formik_abstraction',
        Component: FormikAbstraction,
        name: 'Formik Abstraction'
    },
    {
        to: '/register_formik_page',
        path: 'register_formik_page',
        Component: RegisterFormikPage,
        name: 'Register Formik'
    },
    {
        to: '/dynamic_form',
        path: 'dynamic_form',
        Component: DynamicForm,
        name: 'Dynamic Form'
    },
  
]