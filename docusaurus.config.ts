import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Apache Fury (incubating)',
  tagline: 'A blazing-fast cross-language serialization framework powered by just-in-time compilation and zero-copy',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://fury.apache.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Apache', // Usually your GitHub org/user name.
  projectName: 'fury', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [require.resolve('docusaurus-lunr-search')],
  themeConfig: {
    // Replace with your project's social card
    navbar: {
      title: '',
      logo: {
        alt: 'Fury Logo',
        src: 'img/navbar-logo.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        {
          type: 'docSidebar',
          sidebarId: 'startSidebar',
          position: 'right',
          label: 'Start',
        },
        {
          type: 'docSidebar',
          sidebarId: 'introductionSidebar',
          position: 'right',
          label: 'Introduction',
        },
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'right',
          label: 'Guide',
        },
        {to: '/blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/apache/incubator-fury',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/fury_community',
            },
          ],
        },
        {
          title: 'Help',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/apache/incubator-fury',
            },
          ],
        },
      ],
      logo: {
        width: 256,
        src: "/img/apache-incubator.svg",
      },
      copyright: `Apache Fury is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.

      Copyright © ${new Date().getFullYear()} The Apache Software Foundation, Licensed under the Apache License, Version 2.0.
      Apache, the names of Apache projects, and the feather logo are either registered trademarks or trademarks of the Apache Software Foundation in the United States and/or other countries.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["java", "javascript", "rust", "cpp", "c", "bash", "scala", "python"]
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
