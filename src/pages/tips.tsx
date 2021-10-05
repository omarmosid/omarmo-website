import { Box, Heading } from "@chakra-ui/layout";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import CardContainer from "../components/card/CardContainer";
import { ContentCard } from "../components/card/ContentCard";
import { PageHeader } from "../components/header/PageHeader";
import { FullLayout } from "../components/layout";
import { Seo } from "../components/seo";

const Tips = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const tips = data.allMarkdownRemark.nodes;

  return (
    <>
      <Seo title="Tips" />
      <FullLayout Header={<PageHeader title="Tips" />}>
        <CardContainer>
          {tips.length > 0 ? (
            tips.map(tip => {
              const title = tip.frontmatter.title || tip.fields.slug;
              const image = getImage(tip.frontmatter.featuredImage);
              return (
                <ContentCard
                  title={tip.frontmatter.title}
                  link={`/tips${tip.fields.slug}`}
                  date={tip.frontmatter.date}
                  description={tip.frontmatter.description}
                  image={image}
                  excerpt={tip.excerpt}
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

export default Tips;

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
        fields: { collection: { eq: "tips" } }
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
