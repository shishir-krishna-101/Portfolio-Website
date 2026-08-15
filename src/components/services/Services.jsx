import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>what I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Containers & Kubernetes</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Containerized applications using Docker.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deploy and manage workloads with Kubernetes.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Configure Services, Ingress, DNS and networking.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Package applications using Helm.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>CI/CD & Automation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Build version-controlled workflows with Git.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create automated Jenkins pipelines.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Automate testing, builds and deployments.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implement reliable CI/CD practices.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Cloud & Observability</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Work with AWS cloud infrastructure.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Monitor systems using Prometheus and Grafana.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Diagnose application and Kubernetes issues.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Manage infrastructure using Terraform.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
