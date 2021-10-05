import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import * as React from "react";
import { ContentBody } from "../components/content";
import { ContentNav } from "../components/content/ContentNav";
import { ContentHeader } from "../components/header";
import { FullLayout } from "../components/layout";
import { Seo } from "../components/seo";

const ProjectTemplate = ({ data, location }) => {
  const project = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  const image = getImage(project.frontmatter.featuredImage);

  return (
    <>
      <FullLayout
        Header={
          <ContentHeader
            title={project.frontmatter.title}
            date={project.frontmatter.date}
            featuredImage={image}
            description={project.frontmatter.description}
          />
        }
      >
        <Seo
          title={project.frontmatter.title}
          description={project.frontmatter.description || project.excerpt}
        />
        <ContentBody html={project.html} />
        <ContentNav
          previous={{
            title: previous?.frontmatter?.title,
            link: `/projects${previous?.fields?.slug}`,
          }}
          next={{
            title: next?.frontmatter?.title,
            link: `/projects${next?.fields?.slug}`,
          }}
        />
      </FullLayout>
    </>
  );
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query ProjectBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
