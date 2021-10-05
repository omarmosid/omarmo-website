import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import * as React from "react";
import { ContentBody } from "../components/content";
import { ContentNav } from "../components/content/ContentNav";
import { ContentHeader } from "../components/header";
import { FullLayout } from "../components/layout";
import { Seo } from "../components/seo";

const PostTemplate = ({ data, location }) => {
  console.log(data)
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  const image = getImage(post.frontmatter.featuredImage);

  return (
    <>
      <FullLayout
        Header={
          <ContentHeader
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            featuredImage={image}
            description={post.frontmatter.description}
          />
        }
      >
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <ContentBody html={post.html} />
        <ContentNav
          previous={{
            title: previous?.frontmatter?.title,
            link: `/posts${previous?.fields?.slug}`,
          }}
          next={{
            title: next?.frontmatter?.title,
            link: `/posts${next?.fields?.slug}`,
          }}
        />
      </FullLayout>
    </>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
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
