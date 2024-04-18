// Page.js
import { getDomain } from '../../lib/data';
import { hubSpotFormScript } from './HubSpotFormScript';

const Page = () => {
  const domain = getDomain();
  const containerStyles = {
    width: '650px',
    margin: '0 auto',
    border: '1px solid #222',
    padding: '35px',
    background: '#fff',
    borderRadius: '8px',
    marginBottom: '100px',
  };
  const joinText = {
    fontSize: '2rem'
  };

  return (
    <div className="container pt-20 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">        
        <div className="col-span-12 md:col-span-12">
          <div className='joinText text-center mb-3'>
            <h2 className='text-white' style={joinText}>Join The Challenge</h2>
          </div>
          <div className='script-container' style={containerStyles}>
            <script
              dangerouslySetInnerHTML={{
                __html: hubSpotFormScript,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page