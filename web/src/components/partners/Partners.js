import React from "react";
import Partner from "../partner/Partner";
import Illustration2 from "../partner/Illustration2";
import { Query } from "react-apollo";
import gql from "graphql-tag";

function Partners(props) {
  const PARTNERS = gql`
    {
      partnerList {
        name
        logo
        website
      }
    }
  `;

  const Partners = () => {
    return (
      <Query query={PARTNERS}>
        {({ loading, error, data }) => {
          if (loading) return `Loading...`;
          if (error) return `Error ${error.message}`;

          return data.partnerList.map((data, index) => {
            return (
              <div className="partner" key={index}>
                <Partner {...data} />
              </div>
            );
          });
        }}
      </Query>
    );
  };

  return (
    <div className="partners" id="partners">
      <div className="partner--container">
        <h2 className="partners__header section__header">
          Companies we've collaborated with:
        </h2>
        <Partners />
      </div>
    </div>
  );
}

export default Partners;
