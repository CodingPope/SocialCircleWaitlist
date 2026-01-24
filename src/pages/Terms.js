import React from 'react';
import Header from '../components/Header/Header';
import './Terms.css';

export default function Terms() {
  return (
    <div className='terms-page'>
      <Header />
      <main className='terms-content'>
        <div className='terms-card'>
          <header className='terms-hero'>
            <span className='terms-eyebrow'>Social Circle</span>
            <h1>Terms of Service & End User License Agreement</h1>
            <div className='terms-meta-row'>
              <p className='terms-meta'>Effective date: January 19, 2026</p>
              <span className='terms-chip'>Version 1.0</span>
            </div>
          </header>

          <section className='terms-section'>
            <h2>1. ACCEPTANCE OF TERMS</h2>
            <p>
              By creating an account, accessing, or using Social Circle ("the
              App"), you agree to be bound by these Terms of Service and End
              User License Agreement ("Terms"). If you do not agree to these
              Terms, you may not use the App.
            </p>
            <p>
              <strong>Apple Sign-In:</strong> If you use Sign in with Apple to
              create your account, you agree to Apple's terms and conditions. We
              receive limited information from Apple (name, email) as permitted
              by your Apple ID settings. You can manage your Sign in with Apple
              preferences in your Apple ID settings.
            </p>
            <p>
              <strong>Age Requirement:</strong> You must be at least{' '}
              <strong>18 years old</strong> to use Social Circle. By creating an
              account, you certify that you meet this age requirement. We may
              request age verification at any time. This 18+ requirement is our
              business policy to maintain a mature community focused on adult
              socializing.
            </p>
            <p>
              <strong>Parental Consent:</strong> Users under 18 are prohibited
              regardless of parental consent.
            </p>
          </section>

          <section className='terms-section'>
            <h2>2. ZERO TOLERANCE POLICY</h2>
            <p>
              Social Circle has <strong>ZERO TOLERANCE</strong> for the
              following:
            </p>
            <h3>2.1 Prohibited Content</h3>
            <p>You may NOT post, share, or transmit content that is:</p>
            <ul>
              <li>Sexually explicit, pornographic, or obscene</li>
              <li>
                Hateful, discriminatory, or promotes violence against
                individuals or groups based on race, ethnicity, religion,
                gender, sexual orientation, disability, or other protected
                characteristics
              </li>
              <li>Harassing, threatening, bullying, or intimidating</li>
              <li>Fraudulent, deceptive, or misleading</li>
              <li>
                Illegal or promotes illegal activities (including underage
                drinking or drug use)
              </li>
              <li>Defamatory, libelous, or invasive of another's privacy</li>
              <li>Contains viruses, malware, or malicious code</li>
              <li>Infringes on intellectual property rights of others</li>
              <li>
                Promotes or glorifies self-harm, suicide, or eating disorders
              </li>
            </ul>
            <h3>2.2 Prohibited Conduct</h3>
            <p>You may NOT:</p>
            <ul>
              <li>Impersonate others or create fake accounts</li>
              <li>
                Use the App for commercial solicitation without authorization
              </li>
              <li>Stalk, harass, or abuse other users</li>
              <li>
                Create events with the intent to harm, scam, or defraud others
              </li>
              <li>Spam or repeatedly post unwanted messages</li>
              <li>
                Attempt to circumvent security measures or access restricted
                areas
              </li>
              <li>Use bots, scripts, or automated tools without permission</li>
              <li>Collect user data without consent</li>
              <li>
                No-show repeatedly or create events without intent to
                attend/host
              </li>
              <li>Share or request personal contact information for minors</li>
              <li>Coordinate illegal activities through events or chats</li>
            </ul>
          </section>

          <section className='terms-section'>
            <h2>3. USER-GENERATED CONTENT</h2>
            <h3>3.1 Your Responsibility</h3>
            <p>
              You are solely responsible for all content you create, post, or
              share on Social Circle, including:
            </p>
            <ul>
              <li>Event descriptions and details</li>
              <li>Messages in group chats</li>
              <li>Profile information and photos</li>
              <li>Comments and reviews</li>
              <li>Any media uploaded to the platform</li>
            </ul>
            <h3>3.2 Content Moderation</h3>
            <p>
              Social Circle employs a comprehensive moderation system including:
            </p>
            <p>
              <strong>Automated Filtering:</strong>
            </p>
            <ul>
              <li>
                AI-powered content scanning for prohibited keywords and patterns
              </li>
              <li>
                Image analysis to detect explicit or inappropriate visual
                content
              </li>
              <li>Behavior pattern detection to identify spam and abuse</li>
            </ul>
            <p>
              <strong>User Reporting System:</strong>
            </p>
            <ul>
              <li>In-app "Report" buttons on all user-generated content</li>
              <li>Anonymous reporting to protect user privacy</li>
              <li>Priority review of reported content within 24 hours</li>
            </ul>
            <p>
              <strong>Manual Review:</strong>
            </p>
            <ul>
              <li>Dedicated moderation team reviewing flagged content</li>
              <li>Human oversight of automated decisions</li>
              <li>Investigation of repeated violations</li>
            </ul>
            <p>
              <strong>Account Reputation Scoring:</strong>
            </p>
            <ul>
              <li>
                Users rated based on reports, violations, and community feedback
              </li>
              <li>Automated warnings for minor infractions</li>
              <li>Escalating consequences for repeat offenders</li>
            </ul>
            <p>
              <strong>We reserve the right to:</strong>
            </p>
            <ul>
              <li>
                Review, monitor, and remove any content at our sole discretion
              </li>
              <li>Suspend or terminate accounts that violate these Terms</li>
              <li>Cooperate with law enforcement investigations</li>
              <li>Share user information when legally required</li>
              <li>Ban users permanently for severe violations</li>
            </ul>
            <h3>3.3 Reporting Violations</h3>
            <p>
              <strong>Users must report:</strong>
            </p>
            <ul>
              <li>Inappropriate content via the in-app report feature</li>
              <li>Abusive behavior or harassment immediately</li>
              <li>Events that appear fraudulent, unsafe, or illegal</li>
              <li>Suspected underage users</li>
              <li>Threats of violence or self-harm</li>
            </ul>
            <p>
              <strong>How to Report:</strong>
            </p>
            <ol>
              <li>Tap the "•••" menu on any content or profile</li>
              <li>Select "Report"</li>
              <li>Choose the violation category</li>
              <li>Provide additional details (optional but helpful)</li>
            </ol>
            <p>
              Reports are reviewed within 24 hours. False or malicious reporting
              may result in account suspension.
            </p>
          </section>

          <section className='terms-section'>
            <h2>4. EVENT PARTICIPATION</h2>
            <h3>4.1 Host Responsibilities</h3>
            <p>Event hosts agree to:</p>
            <ul>
              <li>
                Provide accurate event information (time, location, description,
                capacity)
              </li>
              <li>Maintain a safe and respectful environment</li>
              <li>
                Not discriminate against attendees based on protected
                characteristics
              </li>
              <li>
                Cancel events with reasonable notice if necessary (minimum 2
                hours before start time)
              </li>
              <li>
                Comply with all local laws, venue regulations, and permit
                requirements
              </li>
              <li>
                Verify venue availability and permissions before creating events
              </li>
              <li>
                Not host events at private residences unless clearly disclosed
              </li>
              <li>
                Screen attendees appropriately for private or restricted events
              </li>
            </ul>
            <h3>4.2 Attendee Responsibilities</h3>
            <p>Attendees agree to:</p>
            <ul>
              <li>
                RSVP honestly and attend events they commit to (or cancel with
                notice)
              </li>
              <li>Respect hosts and other attendees</li>
              <li>Follow event rules and venue policies</li>
              <li>Report safety concerns immediately</li>
              <li>Leave peacefully if asked by the host</li>
              <li>Not bring uninvited guests without host permission</li>
            </ul>
            <h3>4.3 No Liability for In-Person Meetings</h3>
            <p>
              <strong>Social Circle is NOT responsible for:</strong>
            </p>
            <ul>
              <li>User behavior at in-person events</li>
              <li>Injuries, damages, or losses occurring at events</li>
              <li>Disputes between users</li>
              <li>Verification of user identities or backgrounds</li>
              <li>Quality, safety, or legality of event venues</li>
              <li>Accuracy of event descriptions</li>
              <li>Conflicts arising from event cancellations or changes</li>
            </ul>
            <p>
              <strong>You attend events at your own risk.</strong>
            </p>
            <h3>4.4 Safety Guidelines for In-Person Events</h3>
            <p>
              <strong>For your safety:</strong>
            </p>
            <ul>
              <li>
                Always meet in public, well-lit locations for first-time events
              </li>
              <li>
                Tell a friend or family member where you're going and when you
                expect to return
              </li>
              <li>
                Do not share personal contact information (phone, address) until
                you feel comfortable
              </li>
              <li>
                Trust your instincts — you can leave any event at any time, no
                explanation needed
              </li>
              <li>Do not accept rides from people you just met</li>
              <li>Keep your phone charged and accessible</li>
              <li>
                Report suspicious or unsafe events immediately via the in-app
                report feature
              </li>
              <li>
                Hosts must not change event location without updating the app
                and notifying attendees
              </li>
            </ul>
            <p>
              <strong>Red Flags to Watch For:</strong>
            </p>
            <ul>
              <li>Events at undisclosed or frequently changing locations</li>
              <li>
                Hosts asking for money upfront (unless clearly a paid event)
              </li>
              <li>Pressure to bring friends or recruit others</li>
              <li>Requests to move conversations off-platform immediately</li>
              <li>Events that seem designed to isolate you</li>
            </ul>
            <p>
              <strong>
                Social Circle is NOT responsible for verifying the safety of
                event locations or conducting background checks on attendees.
              </strong>
            </p>
          </section>

          <section className='terms-section'>
            <h2>5. ACCOUNT TERMINATION</h2>
            <p>
              We may suspend or terminate your account immediately without
              notice for:
            </p>
            <ul>
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Repeated user reports or complaints</li>
              <li>Abusive or harmful behavior</li>
              <li>Creating multiple accounts to evade bans</li>
              <li>Providing false information (including age)</li>
              <li>Failure to respond to age verification requests</li>
              <li>
                Using the App for purposes other than socializing (spam,
                solicitation, etc.)
              </li>
            </ul>
            <p>
              <strong>Termination Consequences:</strong>
            </p>
            <ul>
              <li>Immediate loss of access to all App features</li>
              <li>
                Forfeiture of any paid features, subscriptions, or credits (no
                refunds)
              </li>
              <li>Removal of all your content (events, messages, photos)</li>
              <li>Permanent ban from creating new accounts</li>
              <li>
                Potential reporting to law enforcement if illegal activity is
                suspected
              </li>
            </ul>
            <p>
              <strong>You may appeal account termination</strong> by emailing
              appeals@findyourcircle.app within 30 days with your user ID and
              explanation.
            </p>
          </section>

          <section className='terms-section'>
            <h2>6. INTELLECTUAL PROPERTY</h2>
            <h3>6.1 Your Content License</h3>
            <p>
              By posting content, you grant Social Circle a worldwide,
              non-exclusive, royalty-free, transferable license to:
            </p>
            <ul>
              <li>
                Display, reproduce, and distribute your content within the App
              </li>
              <li>
                Use your content for promotional purposes (with anonymization
                when appropriate)
              </li>
              <li>Modify or adapt content for technical compatibility</li>
              <li>Create derivative works for marketing materials</li>
            </ul>
            <p>
              <strong>You retain ownership</strong> of your content but agree to
              this license for App functionality.
            </p>
            <p>
              <strong>You represent and warrant</strong> that:
            </p>
            <ul>
              <li>You own or have rights to all content you post</li>
              <li>
                Your content does not infringe third-party intellectual property
              </li>
              <li>
                You have obtained necessary permissions for any recognizable
                individuals in photos
              </li>
            </ul>
            <h3>6.2 Social Circle's Intellectual Property</h3>
            <p>
              All App design, code, branding, logos, and features are owned by
              Social Circle or our licensors.
            </p>
            <p>
              <strong>You may NOT:</strong>
            </p>
            <ul>
              <li>Copy, modify, or reverse-engineer the App</li>
              <li>
                Use our trademarks, logos, or branding without written
                permission
              </li>
              <li>Create derivative works based on the App</li>
              <li>Extract data through scraping or automated tools</li>
              <li>Frame or mirror any portion of the App</li>
            </ul>
          </section>

          <section className='terms-section'>
            <h2>7. PRIVACY &amp; DATA COLLECTION</h2>
            <h3>7.1 Data We Collect</h3>
            <p>Social Circle collects:</p>
            <ul>
              <li>
                <strong>Account Information:</strong> Name, email, phone number,
                date of birth, profile photo
              </li>
              <li>
                <strong>Location Data:</strong> GPS coordinates, manual location
                selections, event locations
              </li>
              <li>
                <strong>Event Participation:</strong> Events created, attended,
                RSVPs, waitlists
              </li>
              <li>
                <strong>Communications:</strong> Chat messages, event comments,
                user reports
              </li>
              <li>
                <strong>Device Information:</strong> Device type, OS version,
                unique identifiers, IP address
              </li>
              <li>
                <strong>Usage Analytics:</strong> App interactions, feature
                usage, time spent in app
              </li>
            </ul>
            <h3>7.2 Location Services</h3>
            <p>
              <strong>The App uses location data for:</strong>
            </p>
            <ul>
              <li>Showing nearby events on the map</li>
              <li>Helping you discover events in your area</li>
              <li>Allowing hosts to pin event locations accurately</li>
              <li>Improving event recommendations based on your preferences</li>
            </ul>
            <p>
              <strong>The App remains functional if location is denied.</strong>{' '}
              You can:
            </p>
            <ul>
              <li>Manually search for events by city, ZIP code, or area</li>
              <li>View all public events without GPS</li>
              <li>
                Create events by manually placing a pin on the map or entering
                an address
              </li>
              <li>
                Browse the Discover feed with location-independent filters
              </li>
            </ul>
            <p>
              <strong>We do NOT:</strong>
            </p>
            <ul>
              <li>
                Sell or share your precise GPS location with third parties for
                advertising
              </li>
              <li>
                Track your location in the background when the app is closed
              </li>
              <li>
                Share your location with other users unless you explicitly check
                in to an event
              </li>
            </ul>
            <p>
              For complete details, see our{' '}
              <a href='/privacy'>Privacy Policy</a> (required reading).
            </p>
            <h3>7.3 Tracking &amp; Analytics</h3>
            <p>
              We use analytics tools (e.g., Mixpanel, Firebase Analytics) to:
            </p>
            <ul>
              <li>Understand how users interact with the App</li>
              <li>Improve features and fix bugs</li>
              <li>Measure marketing effectiveness</li>
              <li>Personalize your experience</li>
            </ul>
            <p>
              <strong>You can opt out</strong> via the App Tracking Transparency
              (ATT) prompt when you first launch the App. Declining tracking
              does NOT affect core app functionality.
            </p>
            <h3>7.4 Your Data Rights</h3>
            <p>
              <strong>California Residents (CCPA):</strong>
            </p>
            <ul>
              <li>
                You have the right to request disclosure of data we collect
              </li>
              <li>
                You have the right to request deletion of your personal data
              </li>
              <li>
                You have the right to opt-out of data sharing with third parties
              </li>
            </ul>
            <p>
              <strong>EU/UK Residents (GDPR):</strong>
            </p>
            <ul>
              <li>You have the right to access your personal data</li>
              <li>You have the right to rectify inaccurate data</li>
              <li>You have the right to erasure ("right to be forgotten")</li>
              <li>You have the right to data portability</li>
              <li>You have the right to object to processing</li>
            </ul>
            <p>
              <strong>To exercise these rights:</strong> Email
              privacy@findyourcircle.app with your user ID and request. We will
              respond within 30 days.
            </p>
            {/* FEATURE FLAG: Uncomment when third-party integrations are finalized */}
            {/* <h3>7.5 Third-Party Services</h3>
            <p>
              Social Circle uses the following third-party services to provide
              App functionality:
            </p>
            <ul>
              <li>
                <strong>Apple Services:</strong> Sign in with Apple for
                authentication, Apple Push Notification Service (APNs) for
                notifications. Subject to{' '}
                <a
                  href='https://www.apple.com/legal/internet-services/terms/site.html'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Apple Terms of Service
                </a>
                .
              </li>
              <li>
                <strong>Google Services:</strong> Google Sign-In (optional),
                Google Maps Platform for geocoding and address lookup, Firebase
                (Firestore, Authentication, Cloud Functions, Storage, Analytics).
                Subject to{' '}
                <a
                  href='https://policies.google.com/terms'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Google Terms of Service
                </a>
                .
              </li>
              <li>
                <strong>Expo:</strong> Expo Push Notification Service for
                cross-platform notifications. Subject to{' '}
                <a
                  href='https://expo.dev/terms'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Expo Terms of Service
                </a>
                .
              </li>
              <li>
                <strong>Analytics:</strong> Mixpanel or Firebase Analytics (if
                you opt in). Subject to provider's terms.
              </li>
            </ul>
            <p>
              <strong>We are not responsible for:</strong>
            </p>
            <ul>
              <li>The availability, accuracy, or reliability of third-party services</li>
              <li>Changes to third-party terms, privacy policies, or pricing</li>
              <li>Data handling practices of third-party providers (see their privacy policies)</li>
              <li>Service outages or data loss caused by third-party failures</li>
            </ul>
            <p>
              Your use of third-party services through the App is also governed
              by the respective provider's terms and privacy policies. We
              encourage you to review them.
            </p> */}
          </section>

          <section className='terms-section'>
            <h2>8. BUSINESS ACCOUNTS</h2>
            <h3>8.1 Business Profile Requirements</h3>
            <p>Business accounts must:</p>
            <ul>
              <li>
                Represent legitimate, registered businesses with verifiable
                operations
              </li>
              <li>Provide accurate contact information and business details</li>
              <li>Comply with all consumer protection laws</li>
              <li>Clearly disclose business nature in profile and events</li>
              <li>Not misrepresent products, services, or offerings</li>
            </ul>
            <h3>8.2 Business Verification</h3>
            <p>Businesses may be required to provide:</p>
            <ul>
              <li>Business registration documents</li>
              <li>Tax ID or EIN</li>
              <li>Proof of physical location (if applicable)</li>
              <li>Government-issued ID for account holder</li>
            </ul>
            <h3>8.3 Sponsored Events &amp; Advertising</h3>
            <p>
              Businesses may create sponsored events, which will be clearly
              labeled as such.
            </p>
            <p>
              <strong>Sponsored content must:</strong>
            </p>
            <ul>
              <li>Comply with all content policies (Section 2)</li>
              <li>
                Follow advertising regulations (FTC guidelines,
                truth-in-advertising laws)
              </li>
              <li>Not be deceptive or misleading</li>
              <li>Disclose material connections (e.g., paid partnerships)</li>
              <li>Not target minors or promote age-restricted products</li>
            </ul>
            {/* FEATURE FLAG: Uncomment when in-app purchases are implemented */}
            {/* <h3>8.4 Premium Features &amp; Subscriptions</h3>
            <p>
              Business accounts may access paid premium features including:
            </p>
            <ul>
              <li>Enhanced visibility on the map</li>
              <li>Priority placement in Discover feed</li>
              <li>Analytics dashboards</li>
              <li>Custom branding options</li>
            </ul>
            
            <h3>8.5 In-App Purchases &amp; Subscriptions (Apple App Store)</h3>
            <p>
              <strong>Available Subscription Tiers:</strong>
            </p>
            <ul>
              <li><strong>Tier 1 (Base):</strong> $14.99/month or $149.99/year</li>
              <li><strong>Tier 2 (Growth):</strong> $38.99/month or $389.99/year</li>
              <li><strong>Founding Partner:</strong> One-time payment (limited availability)</li>
            </ul>
            <p>
              <strong>Auto-Renewal &amp; Billing:</strong>
            </p>
            <ul>
              <li>
                Payment will be charged to your Apple ID account at confirmation
                of purchase
              </li>
              <li>
                Subscriptions automatically renew unless auto-renew is turned off
                at least 24 hours before the end of the current period
              </li>
              <li>
                Your account will be charged for renewal within 24 hours prior to
                the end of the current period
              </li>
              <li>
                Current price for renewal will be charged unless we notify you of
                a price change in advance
              </li>
              <li>
                Any unused portion of a free trial period (if offered) will be
                forfeited when you purchase a subscription
              </li>
            </ul>
            <p>
              <strong>Managing &amp; Canceling Subscriptions:</strong>
            </p>
            <ul>
              <li>
                You can manage and cancel subscriptions in your Apple ID Account
                Settings
              </li>
              <li>
                Go to Settings → [Your Name] → Subscriptions → Social Circle
              </li>
              <li>
                Cancellation takes effect at the end of the current billing cycle
              </li>
              <li>
                No refunds for partial billing periods or unused features
              </li>
            </ul>
            <p>
              <strong>Refund Policy:</strong>
            </p>
            <ul>
              <li>
                All purchases are processed through Apple and subject to{' '}
                <a
                  href='https://www.apple.com/legal/internet-services/itunes/us/terms.html'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Apple's Paid Applications Terms of Service
                </a>
              </li>
              <li>
                Refund requests must be submitted directly to Apple via
                reportaproblem.apple.com or the App Store
              </li>
              <li>
                Social Circle does not process refunds for App Store purchases
              </li>
              <li>
                Subscriptions are non-refundable except as required by law or
                Apple's policies
              </li>
            </ul>
            <p>
              <strong>Restore Purchases:</strong>
            </p>
            <ul>
              <li>
                You can restore previously purchased subscriptions or features on
                a new device by tapping "Restore Purchases" in the app
              </li>
              <li>
                Must use the same Apple ID that made the original purchase
              </li>
            </ul>
            <p>
              <strong>Price Changes:</strong>
            </p>
            <ul>
              <li>
                We may change subscription prices with 30 days advance notice
              </li>
              <li>
                Price changes apply to new subscribers and renewals after the
                notice period
              </li>
              <li>
                You will be notified via email and in-app notification before any
                price increase
              </li>
            </ul>
            <p>
              <strong>Free Trials (if offered):</strong>
            </p>
            <ul>
              <li>
                Free trial eligibility is limited to new subscribers only
              </li>
              <li>
                You will be charged the subscription price automatically at the
                end of the trial unless you cancel before the trial ends
              </li>
              <li>
                To avoid charges, cancel at least 24 hours before the trial ends
              </li>
            </ul>
            <p>
              For questions about billing or subscriptions, contact{' '}
              <a href='mailto:support@findyourcircle.app'>
                support@findyourcircle.app
              </a>
              .
            </p> */}
          </section>

          <section className='terms-section'>
            <h2>9. DISCLAIMERS</h2>
            <p>
              <strong>
                THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.
              </strong>
            </p>
            <p>
              Social Circle makes <strong>NO GUARANTEES</strong> regarding:
            </p>
            <ul>
              <li>Uninterrupted, error-free, or secure operation</li>
              <li>
                Accuracy of user-provided information (profiles, events,
                locations)
              </li>
              <li>Compatibility with all devices or operating systems</li>
              <li>Availability in all geographic regions</li>
              <li>Quality or safety of user interactions</li>
              <li>Success in making friends or attending events</li>
            </ul>
            <p>
              <strong>WE DO NOT:</strong>
            </p>
            <ul>
              <li>Conduct background checks on users</li>
              <li>
                Verify user identities (beyond basic email/phone verification)
              </li>
              <li>Screen users for criminal history</li>
              <li>Guarantee the safety of events or venues</li>
              <li>Endorse any user, event, or business on the platform</li>
            </ul>
          </section>

          <section className='terms-section'>
            <h2>10. LIMITATION OF LIABILITY</h2>
            <p>
              <strong>To the maximum extent permitted by law:</strong>
            </p>
            <h3>10.1 Excluded Damages</h3>
            <p>
              Social Circle, its officers, directors, employees, and affiliates
              are <strong>NOT LIABLE</strong> for:
            </p>
            <ul>
              <li>Indirect, incidental, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or goodwill</li>
              <li>Personal injury or property damage arising from app use</li>
              <li>
                Damages arising from user interactions or in-person events
              </li>
              <li>Unauthorized access to your account or data</li>
              <li>Service interruptions or technical failures</li>
            </ul>
            <h3>10.2 Liability Cap</h3>
            <p>
              <strong>Our total liability</strong> to you for all claims arising
              from your use of the App shall not exceed the greater of:
            </p>
            <ul>
              <li>
                <strong>$100 USD</strong>, or
              </li>
              <li>
                The total amount you paid for premium features in the 12 months
                before the claim
              </li>
            </ul>
            <h3>10.3 Exceptions</h3>
            <p>
              Some jurisdictions do not allow limitations on implied warranties
              or liability for incidental damages. If you reside in such a
              jurisdiction, some of the above limitations may not apply to you.
            </p>
          </section>

          <section className='terms-section'>
            <h2>11. INDEMNIFICATION</h2>
            <p>
              You agree to <strong>indemnify, defend, and hold harmless</strong>{' '}
              Social Circle, its officers, directors, employees, contractors,
              and affiliates from any claims, damages, losses, liabilities, and
              expenses (including attorney fees) arising from:
            </p>
            <ul>
              <li>Your violation of these Terms</li>
              <li>Your content or conduct on the App</li>
              <li>Your participation in events (as host or attendee)</li>
              <li>
                Your infringement of third-party rights (intellectual property,
                privacy, etc.)
              </li>
              <li>Your violation of applicable laws or regulations</li>
              <li>False or misleading information you provide</li>
            </ul>
            <p>This indemnification survives termination of your account.</p>
          </section>

          <section className='terms-section'>
            <h2>12. DISPUTE RESOLUTION</h2>
            <h3>12.1 Governing Law</h3>
            <p>
              These Terms are governed by the laws of the{' '}
              <strong>State of Colorado, United States</strong>, without regard
              to conflict of law principles.
            </p>
            <h3>12.2 Informal Resolution</h3>
            <p>
              Before filing a claim, you agree to contact us at
              disputes@findyourcircle.app to attempt informal resolution. We'll
              work in good faith to resolve the issue within 30 days.
            </p>
            <h3>12.3 Binding Arbitration</h3>
            <p>
              If informal resolution fails, any disputes shall be resolved
              through <strong>binding arbitration</strong> administered by the
              American Arbitration Association (AAA) under its Consumer
              Arbitration Rules.
            </p>
            <p>
              <strong>Arbitration terms:</strong>
            </p>
            <ul>
              <li>
                Conducted in Colorado or your county of residence (your choice)
              </li>
              <li>Single arbitrator selected per AAA rules</li>
              <li>
                AAA filing fees apply (we'll pay your fees if your claim is
                under $10,000)
              </li>
              <li>Discovery limited to preserve efficiency</li>
              <li>Arbitrator's decision is final and binding</li>
            </ul>
            <p>
              <strong>Exceptions to arbitration:</strong>
            </p>
            <ul>
              <li>
                Small claims court actions (if under jurisdictional limit)
              </li>
              <li>Injunctive relief for intellectual property violations</li>
              <li>Emergency relief to prevent irreparable harm</li>
            </ul>
            <h3>12.4 Class Action Waiver</h3>
            <p>
              <strong>
                You agree to resolve disputes individually and waive the right
                to:
              </strong>
            </p>
            <ul>
              <li>
                Participate in class actions, collective actions, or
                representative proceedings
              </li>
              <li>Serve as a class representative or class member</li>
              <li>Consolidate your claim with others</li>
            </ul>
            <p>
              <strong>If this waiver is found unenforceable,</strong> the
              arbitration clause shall not apply, and disputes will be resolved
              in courts as described below.
            </p>
            <h3>12.5 Judicial Forum (if arbitration doesn't apply)</h3>
            <p>
              If arbitration is inapplicable or waived, you agree to exclusive
              jurisdiction in the state and federal courts located in{' '}
              <strong>Denver, Colorado</strong>.
            </p>
          </section>

          <section className='terms-section'>
            <h2>13. CHANGES TO TERMS</h2>
            <p>Social Circle may update these Terms at any time to reflect:</p>
            <ul>
              <li>Changes in legal requirements</li>
              <li>New features or services</li>
              <li>Enhanced safety or privacy protections</li>
              <li>Clarifications based on user feedback</li>
            </ul>
            <p>
              <strong>We will notify you via:</strong>
            </p>
            <ul>
              <li>In-app notification banner</li>
              <li>Email to your registered email address</li>
              <li>
                Prompt requiring re-acceptance before continued use (for
                material changes)
              </li>
            </ul>
            <p>
              <strong>
                Continued use after changes constitutes acceptance of the new
                Terms.
              </strong>{' '}
              If you do not agree, you must stop using the App and may request
              account deletion.
            </p>
            <p>
              <strong>Material changes</strong> (e.g., arbitration terms,
              liability limitations) will require affirmative acceptance.
            </p>
          </section>

          <section className='terms-section'>
            <h2>14. CONTACT &amp; REPORTING</h2>
            <p>
              <strong>To report violations or contact us:</strong>
            </p>
            <div className='contact-table'>
              <div className='contact-row'>
                <span className='contact-issue'>Content/User Reports</span>
                <span className='contact-method'>
                  Use the "Report" feature in-app on any content or profile
                </span>
              </div>
              <div className='contact-row'>
                <span className='contact-issue'>Safety Concerns</span>
                <span className='contact-method'>
                  <a href='mailto:safety@findyourcircle.app'>
                    safety@findyourcircle.app
                  </a>
                </span>
              </div>
              <div className='contact-row'>
                <span className='contact-issue'>General Support</span>
                <span className='contact-method'>
                  <a href='mailto:support@findyourcircle.app'>
                    support@findyourcircle.app
                  </a>
                </span>
              </div>
              <div className='contact-row'>
                <span className='contact-issue'>Privacy Requests</span>
                <span className='contact-method'>
                  <a href='mailto:privacy@findyourcircle.app'>
                    privacy@findyourcircle.app
                  </a>
                </span>
              </div>
              <div className='contact-row'>
                <span className='contact-issue'>Account Appeals</span>
                <span className='contact-method'>
                  <a href='mailto:appeals@findyourcircle.app'>
                    appeals@findyourcircle.app
                  </a>
                </span>
              </div>
              <div className='contact-row'>
                <span className='contact-issue'>Disputes</span>
                <span className='contact-method'>
                  <a href='mailto:disputes@findyourcircle.app'>
                    disputes@findyourcircle.app
                  </a>
                </span>
              </div>
              <div className='contact-row'>
                <span className='contact-issue'>Business Inquiries</span>
                <span className='contact-method'>
                  <a href='mailto:business@findyourcircle.app'>
                    business@findyourcircle.app
                  </a>
                </span>
              </div>
            </div>
            <p>
              <strong>Response Time:</strong> We aim to respond to all inquiries
              within 48 business hours.
            </p>
            <p>
              <strong>Mailing Address:</strong>
              <br />
              Social Circle, Inc.
              <br />
              2001 W Gill Pl
              <br />
              Denver, CO 80223
            </p>
          </section>

          <section className='terms-section'>
            <h2>15. SEVERABILITY</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or
              invalid by a court of competent jurisdiction, that provision shall
              be limited or eliminated to the minimum extent necessary so that
              these Terms remain in full force and effect.
            </p>
          </section>

          <section className='terms-section'>
            <h2>16. ENTIRE AGREEMENT</h2>
            <p>
              These Terms, together with our{' '}
              <a href='/privacy'>Privacy Policy</a> and any supplemental terms
              for specific features (e.g., Business Account Terms, Premium
              Subscription Terms), constitute the entire agreement between you
              and Social Circle regarding your use of the App.
            </p>
            <p>
              <strong>These Terms supersede</strong> all prior agreements,
              understandings, or representations, whether written or oral.
            </p>
          </section>

          <section className='terms-section'>
            <h2>17. CHILDREN'S PRIVACY</h2>
            <p>
              Social Circle is intended for users aged{' '}
              <strong>18 and older</strong>. We do <strong>NOT</strong>{' '}
              knowingly collect personal information from anyone under 18.
            </p>
            <p>
              <strong>If we discover a user is under 18:</strong>
            </p>
            <ul>
              <li>We will immediately terminate their account</li>
              <li>We will delete all their personal data from our systems</li>
              <li>
                We will investigate how the account was created to prevent
                future violations
              </li>
            </ul>
            <p>
              <strong>If you believe a minor has created an account:</strong>
            </p>
            <ul>
              <li>
                Report it immediately via the in-app report feature or email
                safety@findyourcircle.app
              </li>
              <li>Provide the username or profile link</li>
              <li>We will investigate within 24 hours</li>
            </ul>
            <p>
              <strong>Parental Notice:</strong> If you are a parent or guardian
              and believe your child under 18 has created an account, contact us
              immediately at privacy@findyourcircle.app with:
            </p>
            <ul>
              <li>Your child's username or email</li>
              <li>Proof of your relationship (e.g., ID matching last name)</li>
              <li>Request for account deletion</li>
            </ul>
            <p>
              We will delete the account and data within 30 days of
              verification.
            </p>
          </section>

          <section className='terms-section'>
            <h2>18. EXPORT CONTROLS</h2>
            <p>
              You may not use or export the App in violation of U.S. export laws
              and regulations. By using the App, you represent that:
            </p>
            <ul>
              <li>You are not located in a country subject to U.S. embargo</li>
              <li>
                You are not on any U.S. government list of prohibited or
                restricted parties
              </li>
              <li>You will comply with all applicable export control laws</li>
            </ul>
          </section>

          <section className='terms-section'>
            <h2>19. FORCE MAJEURE</h2>
            <p>
              Social Circle shall not be liable for any failure or delay in
              performance due to circumstances beyond our reasonable control,
              including:
            </p>
            <ul>
              <li>Acts of God (natural disasters, pandemics)</li>
              <li>War, terrorism, or civil unrest</li>
              <li>Government actions or regulations</li>
              <li>Internet or telecommunications failures</li>
              <li>Third-party service outages (e.g., Firebase, Google Maps)</li>
            </ul>
          </section>

          <section className='terms-section'>
            <h2>20. NO WAIVER</h2>
            <p>
              Our failure to enforce any provision of these Terms shall not
              constitute a waiver of that provision or any other provision. Any
              waiver must be in writing and signed by an authorized
              representative of Social Circle.
            </p>
          </section>

          <section className='terms-section'>
            <h2>21. ASSIGNMENT</h2>
            <p>
              You may not assign or transfer these Terms or your account to any
              third party without our prior written consent.
            </p>
            <p>
              Social Circle may assign these Terms or delegate any obligations
              without restriction, including in connection with a merger,
              acquisition, or sale of assets.
            </p>
          </section>

          <section className='terms-section'>
            <h2>22. SURVIVAL</h2>
            <p>
              The following sections survive termination of your account or
              these Terms:
            </p>
            <ul>
              <li>Section 2 (Zero Tolerance Policy)</li>
              <li>Section 6 (Intellectual Property)</li>
              <li>Section 10 (Limitation of Liability)</li>
              <li>Section 11 (Indemnification)</li>
              <li>Section 12 (Dispute Resolution)</li>
            </ul>
          </section>

          <section className='terms-highlight'>
            <p>
              <strong>
                By clicking "I Accept," checking the acceptance box, or using
                Social Circle, you acknowledge that you have read, understood,
                and agree to be bound by these Terms of Service and End User
                License Agreement.
              </strong>
            </p>
            <p>
              <strong>
                You also confirm that you are at least 18 years old and legally
                able to enter into this binding contract.
              </strong>
            </p>
          </section>

          <footer className='terms-footer'>
            <p>
              Version 1.0 • Effective January 19, 2026 • Last Updated January
              19, 2026
            </p>
            <p>Review Cycle: Updated as needed, reviewed quarterly</p>
            <p className='terms-next-step'>
              📄 <strong>NEXT STEP:</strong> Review our{' '}
              <a href='/privacy'>Privacy Policy</a> before using the App.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
