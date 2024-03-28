import nextMDX from '@next/mdx'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeExternalLinks from 'rehype-external-links'

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: {
    dark: 'github-dark-dimmed',
    light: 'github-light',
  },
  defaultLang: {
    block: 'plaintext',
    inline: 'plaintext',
  },
}

const withMDX = nextMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [rehypePrettyCode, options],
      rehypeExternalLinks,
      {
        content: { type: 'text', value: ' 🔗' },
      },
    ],
  },
})

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'mdx', 'md', 'ts', 'tsx'],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
}

export default withMDX(nextConfig)
