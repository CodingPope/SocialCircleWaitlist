import React from 'react';
import Header from '../components/Header/Header';
import './Privacy.css';

export default function Privacy() {
  return (
    <div className='privacy-page'>
      <Header />
      <main className='privacy-content'>
        <div className='privacy-card'>
          <header className='privacy-hero'>
            <span className='privacy-eyebrow'>Social Circle</span>
            <h1>Privacy Policy</h1>
            <p className='privacy-lede'>
              Social Circle is a location-based social app. This policy explains
              what data we collect, why we collect it, where it is stored, and
              the choices you have.
            </p>
            <p className='privacy-note'>
              Some of the data we collect may be considered personal data
              because it can be linked to your account or device.
            </p>
            <div className='privacy-meta-row'>
              <p className='privacy-meta'>Effective date: December 25, 2025</p>
              <span className='privacy-chip'>Adults 18+</span>
            </div>
          </header>

          <section className='privacy-highlight'>
            <h2>Age requirement</h2>
            <p>
              Social Circle is intended for adults 18+. We do not knowingly
              collect personal data from minors.
            </p>
          </section>

          <section className='privacy-grid'>
            <div className='privacy-panel'>
              <h2>Data we collect</h2>
              <ul>
                <li>
                  Account and profile: email address, auth provider identifiers,
                  name, date of birth, sex, profile photo, bio, interests, and
                  verification status.
                </li>
                <li>
                  Location: precise location (latitude/longitude) if you allow
                  it, or a city/ZIP you enter; we also store a coarse geohash
                  for nearby discovery.
                </li>
                <li>
                  Events and activity: events you create (title, description,
                  time, address, location, privacy settings, images), RSVPs,
                  waitlists, saved events, follows, and blocks.
                </li>
                <li>
                  Messages and content: chat messages, posts, comments, and
                  reports you submit.
                </li>
                <li>
                  Business accounts (optional): business name, category,
                  description, website, support email/phone, and business
                  locations.
                </li>
                <li>
                  Support communications: if you contact us, we receive your
                  message and email address.
                </li>
                <li>
                  Device and app data: Expo push token, device platform, and
                  your analytics consent setting.
                </li>
                <li>
                  Analytics (optional): in-app usage events and coarse
                  attributes (e.g., interests count, age bracket, city). We do
                  not send email, phone, or precise location to analytics.
                  Analytics data is used only in aggregate to understand app
                  usage and improve features.
                </li>
              </ul>
            </div>
            <div className='privacy-panel'>
              <h2>Why we collect it</h2>
              <ul>
                <li>Create and secure your account.</li>
                <li>
                  Show nearby events and people, and enable RSVPs, chats, and
                  notifications.
                </li>
                <li>Power discovery and personalization.</li>
                <li>Provide support and respond to requests.</li>
                <li>Maintain safety (reports and moderation) and integrity.</li>
                <li>Improve the app when you opt in to analytics.</li>
              </ul>
            </div>
            <div className='privacy-panel'>
              <h2>Where it is stored</h2>
              <ul>
                <li>
                  Firebase Authentication: login credentials (email/password or
                  Apple/Google sign-in).
                </li>
                <li>
                  Firebase Firestore: user profiles, events, chats, posts,
                  notifications, reports, and analytics events.
                </li>
                <li>
                  Firebase Storage: images you upload (profile, event, post).
                </li>
                <li>
                  Cloud Functions (us-central1): server-side actions like
                  notifications and analytics logging.
                </li>
                <li>
                  On your device: cached event data, user snippets, and
                  preferences (AsyncStorage).
                </li>
                <li>
                  Third-party services for specific functions: Expo Push
                  Notifications plus Apple/Google push services to deliver
                  notifications; Google Maps Geocoding API when you enter a
                  city/ZIP manually.
                </li>
              </ul>
            </div>
          </section>

          <section className='privacy-section'>
            <h2>Permissions we may request</h2>
            <ul>
              <li>Location (foreground): to show nearby events and friends.</li>
              <li>Photos: to upload profile, event, and post images.</li>
              <li>
                Camera (optional): only if you choose to take a photo inside the
                app.
              </li>
              <li>Calendar: to add events to your device calendar.</li>
              <li>Notifications: to send event and message updates.</li>
            </ul>
          </section>

          <section className='privacy-section'>
            <h2>Sharing</h2>
            <p>
              We share data with the service providers listed above to operate
              Social Circle. Your profile, events, and messages are visible to
              other users based on in-app features and privacy settings. We do
              not sell your personal data.
            </p>
          </section>

          <section className='privacy-section'>
            <h2>Tracking and ads</h2>
            <p>
              We do not use third-party advertising SDKs and do not track you
              across other companies' apps or websites.
            </p>
          </section>

          <section className='privacy-section'>
            <h2>Your choices and controls</h2>
            <ul>
              <li>Edit your profile, interests, bio, and photo anytime.</li>
              <li>
                Control location access in device settings; you can enter a
                city/ZIP instead of sharing GPS.
              </li>
              <li>Turn analytics on or off in Privacy &amp; Info.</li>
              <li>Disable push notifications in device settings.</li>
              <li>
                Revoke any permission (photos, camera, calendar) in device
                settings.
              </li>
              <li>
                When you delete your account, we remove your profile from
                discovery and delete or anonymize personal data where possible.
                Some records may be retained temporarily for safety, legal, or
                operational purposes. You can request full deletion at
                support@socialcircle.app.
              </li>
            </ul>
          </section>

          <section className='privacy-section'>
            <h2>Retention</h2>
            <p>
              We keep data as long as your account is active and as needed for
              safety and legal obligations.
            </p>
          </section>

          <section className='privacy-section'>
            <h2>Contact</h2>
            <p>
              Questions or requests? Email us at{' '}
              <a href='mailto:support@socialcircle.app'>
                support@socialcircle.app
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
