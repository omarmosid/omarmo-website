import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import * as React from "react";
import { ContentBody } from "../components/content";
import { ContentNav } from "../components/content/ContentNav";
import { ContentHeader } from "../components/header";
import { FullLayout } from "../components/layout";
import { Seo } from "../components/seo";

const TipTemplate = ({ data, location }) => {
  const tip = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  const image = getImage(tip.frontmatter.featuredImage);

  return (
    <>
      <FullLayout
        Header={
          <ContentHeader
            title={tip.frontmatter.title}
            date={tip.frontmatter.date}
            featuredImage={image}
            description={tip.frontmatter.description}
          />
        }
      >
        <Seo
          title={tip.frontmatter.title}
          description={tip.frontmatter.description || tip.excerpt}
        />
        <ContentBody html={tip.html} />
        <ContentNav
          previous={{
            title: previous?.frontmatter?.title,
            link: `/tips${previous?.fields?.slug}`,
          }}
          next={{
            title: next?.frontmatter?.title,
            link: `/tips${next?.fields?.slug}`,
          }}
        />
      </FullLayout>
    </>
  );
};

export default TipTemplate;

export const pageQuery = graphql`
  query TipBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
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
