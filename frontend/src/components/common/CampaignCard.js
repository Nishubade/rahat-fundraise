import React from 'react';
import { Link } from 'react-router-dom';

const CampaignCard = ({ Cause, citem }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12" key={citem}>
      <div className="wpo-campaign-single">
        <div className="wpo-campaign-item">
          <div className="wpo-campaign-img position-relative">
            {Cause.image ? (
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}${Cause.image}`}
                alt=""
                className="single-campaign-image "
                height={250}
                style={{ width: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div className="single-campaign-image"></div>
            )}
            <div
              className={`position-absolute campaign-status campaign-${Cause?.status?.toLowerCase()}`}
            >
              {Cause.status?.toLowerCase()}
            </div>
          </div>
          <div className="wpo-campaign-content">
            <div className="wpo-campaign-text-top">
              <h2>
                <Link to={`/fundraise/${Cause.id}`} className="text-break">
                  {Cause.title}
                </Link>
              </h2>
              <div className="progress-section">
                <div className="process">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${((Cause.amount / Cause.target) * 100).toFixed(
                          2,
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <ul>
                <li>
                  <span className="pe-1">Goal: </span> {Cause.target} ETH
                </li>
                <li>
                  <span className="pe-1">Raised: </span> {Cause.amount} ETH
                </li>
              </ul>
              <div className="campaign-btn">
                <ul>
                  <li>
                    <span>
                      <img
                        width={45}
                        height={45}
                        src={
                          Cause?.creator?.image
                            ? `${process.env.REACT_APP_API_BASE_URL}${Cause?.creator?.image}`
                            : 'https://assets.rumsan.com/rumsan-group/new-project-1.png'
                        }
                        alt=""
                      />
                    </span>
                    <span>
                      <Link
                        to={`/fundraise/${Cause.id}`}
                        className="text-break"
                      >
                        {Cause.creator?.name || Cause.creator?.alias}
                      </Link>
                    </span>
                  </li>
                  <li>
                    <Link className="e-btn" to={`/fundraise/${Cause.id}`}>
                      Donate Now
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;