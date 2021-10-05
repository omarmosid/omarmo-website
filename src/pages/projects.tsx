import { Box, Heading } from "@chakra-ui/layout";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import CardContainer from "../components/card/CardContainer";
import { ContentCard } from "../components/card/ContentCard";
import { PageHeader } from "../components/header/PageHeader";
import { FullLayout } from "../components/layout";
import { Seo } from "../components/seo";

const Projects = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const projects = data.allMarkdownRemark.nodes;

  return (
    <>
      <Seo title="Projects" />
      <FullLayout Header={<PageHeader title="Projects" />}>
        <CardContainer>
          {projects.length > 0 ? (
            projects.map(project => {
              const title = project.frontmatter.title || project.fields.slug;
              const image = getImage(project.frontmatter.featuredImage);
              return (
                <ContentCard
                  title={project.frontmatter.title}
                  link={`/projects${project.fields.slug}`}
                  date={project.frontmatter.date}
                  description={project.frontmatter.description}
                  image={image}
                  excerpt={project.excerpt}
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

export default Projects;

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
        fields: { collection: { eq: "projects" } }
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
