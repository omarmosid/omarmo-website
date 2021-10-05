const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    // Create Custom Field for Slug
    createNodeField({
      name: `slug`,
      node,
      value,
    });

    // Create Custom Field for Collection
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    });
  }
};

// Create Post Pages
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  console.log("CREATING PAGES")

  // Define a template for blog post
  const postTemplate = path.resolve(`./src/templates/postTemplate.tsx`);
  console.log(postTemplate);

  // Get all markdown blog posts sorted by date
  const postsResult = await graphql(
    `
      query AllPosts {
        allMarkdownRemark(
          filter: {
            frontmatter: { published: { eq: true } }
            fields: { collection: { eq: "posts" } }
          }
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  );

  if (postsResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      postsResult.errors
    );
    return;
  }

  const posts = postsResult.data.allMarkdownRemark.nodes;

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId =
        index === posts.length - 1 ? null : posts[index + 1].id;

      createPage({
        path: `/posts${post.fields.slug}`,
        component: postTemplate,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }


  // PROJECTS
  const projectTemplate = path.resolve(`./src/templates/projectTemplate.tsx`);

  // Get all markdown blog posts sorted by date
  const projectsResult = await graphql(
    `
      query AllProjects {
        allMarkdownRemark(
          filter: {
            frontmatter: { published: { eq: true } }
            fields: { collection: { eq: "projects" } }
          }
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  );

  if (projectsResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      projectsResult.errors
    );
    return;
  }

  const projects = projectsResult.data.allMarkdownRemark.nodes;

  if (projects.length > 0) {
    projects.forEach((project, index) => {
      const previousPostId = index === 0 ? null : projects[index - 1].id;
      const nextPostId =
        index === projects.length - 1 ? null : projects[index + 1].id;

      createPage({
        path: `/projects${project.fields.slug}`,
        component: projectTemplate,
        context: {
          id: project.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }

  // TIPS
  const tipTemplate = path.resolve(`./src/templates/tipTemplate.tsx`);

  // Get all markdown blog posts sorted by date
  const tipsResult = await graphql(
    `
      query AllTips {
        allMarkdownRemark(
          filter: {
            frontmatter: { published: { eq: true } }
            fields: { collection: { eq: "tips" } }
          }
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  );

  if (tipsResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      tipsResult.errors
    );
    return;
  }

  const tips = tipsResult.data.allMarkdownRemark.nodes;

  if (tips.length > 0) {
    tips.forEach((tip, index) => {
      const previousPostId = index === 0 ? null : tips[index - 1].id;
      const nextPostId = index === tips.length - 1 ? null : tips[index + 1].id;

      createPage({
        path: `/tips${tip.fields.slug}`,
        component: tipTemplate,
        context: {
          id: tip.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: String
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `);
};
