import { Box, Heading } from "@chakra-ui/layout";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import * as React from "react";
import CardContainer from "../components/card/CardContainer";
import { ContentCard } from "../components/card/ContentCard";
import { PageHeader } from "../components/header/PageHeader";
import { FullLayout } from "../components/layout/FullLayout";
import Seo from "../components/seo";

const Posts = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <>
      <Seo title="Blog Posts" />
      <FullLayout Header={<PageHeader title="Blog Posts" />}>
        <CardContainer>
          {posts.length > 0 ? (
            posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug;
              const image = getImage(post.frontmatter.featuredImage);
              return (
                <ContentCard
                  title={post.frontmatter.title}
                  link={`/posts${post.fields.slug}`}
                  date={post.frontmatter.date}
                  description={post.frontmatter.description}
                  image={image}
                  excerpt={post.excerpt}
                />
              );
            })
          ) : (
            <Box py={10}>
              <Heading as="h2">Coming soon...</Heading>
            </Box>
          )}
        </CardContainer>
      </FullLayout>
    </>
  );
};

export default Posts;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { published: { eq: true } }
        fields: { collection: { eq: "posts" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
