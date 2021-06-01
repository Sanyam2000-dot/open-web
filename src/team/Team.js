import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { TeamData } from "./TeamData";
// import { makeStyles } from "@material-ui/core/styles";

// import CardMedia from "@material-ui/core/CardMedia";

import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Button from "@material-ui/core/Button";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 300,
//     margin: "10px",
//   },
// });

export const Team = () => {
  // const classes = useStyles();
  return (
    <div>
      <main className="page-about">
        <div className="container">
          <section className="page-header">
            <h1>Team</h1>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Team</Breadcrumb.Item>
            </Breadcrumb>
          </section>
          <section className="py-5 mb-5">
            <div className="container">
              <div className="row">
                {TeamData.map((result) => (
                  <div className="col-lg-4 mb-4">
                    <div className="card project-card border-primary active">
                      <div className="card-body">
                        <img
                          src={result.imageURL}
                          alt=""
                          width="200"
                          height="200"
                          style={{ borderRadius: ".5rem" }}
                        />
                        <h3 className="mb-1">{result.name}</h3>
                        <p className="mb-4">{result.designation}</p>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                          }}
                        >
                          <div>
                            <Button href={result.Twitter}>
                              <TwitterIcon
                                style={{
                                  color: "#55acee",
                                  fontSize: "40px",
                                  cursor: "pointer",
                                }}
                              />
                            </Button>
                          </div>
                          <div>
                            <Button href={result.GitHub}>
                              <GitHubIcon
                                fontSize="large"
                                style={{ color: "#131418", cursor: "pointer" }}
                              />
                            </Button>
                          </div>
                          <div>
                            <Button href={result.LinkedIn}>
                              <LinkedInIcon
                                style={{
                                  color: "#0077B5",
                                  fontSize: "40px",
                                  cursor: "pointer",
                                }}
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className="col-xl-6 col-lg-7 col-md-8 mb-2">
            <h2 className="mb-0 ">Open-Web Developers</h2>
          </div>
        </div>
      </main>
    </div>
  );
};
