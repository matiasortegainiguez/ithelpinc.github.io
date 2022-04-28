import * as React from "react";
import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Loader } from './components/02-molecules/Loader';
import { LoadingPage } from './pages/LoadingPage';
import { PageTemplate } from './templates/PageTemplate';

const HomePage = lazy(() => import(/*
  webpackChunkName: "home",
  webpackPrefetch: true
*/'./pages/HomePage'));
const ItProjectsPage = lazy(() => import(/*
  webpackChunkName: "it-projects",
  webpackPrefetch: true
*/'./pages/ItProjectsPage'));
const ManagedServicesPage = lazy(() => import(/*
  webpackChunkName: "managed-services",
  webpackPrefetch: true
*/'./pages/ManagedServicesPage'));
const RemoteStaffingPage = lazy(() => import(/*
  webpackChunkName: "remote-staffing",
  webpackPrefetch: true
*/'./pages/RemoteStaffingPage'));
const AboutUsPage = lazy(() => import(/*
  webpackChunkName: "about-us",
  webpackPrefetch: true
*/'./pages/AboutUsPage'));
const TestimonialsPage = lazy(() => import(/*
  webpackChunkName: "testimonials",
  webpackPrefetch: true
*/'./pages/TestimonialsPage'));
const ContactUsPage = lazy(() => import(/*
  webpackChunkName: "contact-us",
  webpackPrefetch: true
*/'./pages/ContactUsPage'));
const TermsOfUsePage = lazy(() => import(/*
  webpackChunkName: "terms-of-use"
*/'./pages/TermsOfUsePage'));
const PrivacyPolicyPage = lazy(() => import(/*
  webpackChunkName: "privacy-policy"
*/'./pages/PrivacyPolicyPage'));

export const App: React.FC = () => (
  <Suspense fallback={<LoadingPage />}>
    <PageTemplate>
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route path="/it-projects">
            <ItProjectsPage />
          </Route>

          <Route path="/managed-services">
            <ManagedServicesPage />
          </Route>

          <Route path="/remote-staffing">
            <RemoteStaffingPage />
          </Route>

          <Route path="/about-us">
            <AboutUsPage />
          </Route>

          <Route path="/testimonials">
            <TestimonialsPage />
          </Route>

          <Route path="/contact-us">
            <ContactUsPage />
          </Route>

          <Route path="/terms-of-use">
            <TermsOfUsePage />
          </Route>

          <Route path="/privacy-policy">
            <PrivacyPolicyPage />
          </Route>

          <Route path="/home">
            <HomePage />
          </Route>

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

        </Suspense>
      </Switch>
    </PageTemplate>
  </Suspense>
);