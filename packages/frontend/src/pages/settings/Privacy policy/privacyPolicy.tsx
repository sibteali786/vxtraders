import { MainHeading } from "@/components/common/mainHeading";

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-white p-8 max-w-2xl mx-auto">
      <MainHeading title="Privacy Policy" />

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Types of data we collect</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Use of your personal data</h2>
        <p className="mb-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae.
        </p>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Disclosure of your personal data</h2>
        <p className="mb-4">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
          est laborum et dolorum fuga.
        </p>
        <p>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
          nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
          possimus, omnis voluptas assumenda est, omnis.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
