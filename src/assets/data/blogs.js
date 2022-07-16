const blogs = [
    {
        id: 1,
        title: 'THE BEST HAT FOR FALL',
        slug: 'the-best-hat-for-fall',
        thumb: 'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/892x472/uploaded_images/2.jpg?t=1520920054',
        description:
            'We love these outfits styled by Phyllis Evans Baker for a Calvin Klein collaboration with the Marie Claire & Esquire teams. You can find mas on their website, primed for purchase. This is your first post. Edit or delete it, then start writing! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum delenitiatque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    },
    {
        id: 2,
        title: 'NOSTRUM IESUM CHRISTUM',
        slug: 'nostrum-iesum-christum',
        thumb: 'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/892x472/uploaded_images/10.jpg?t=1521442302',
        description:
            'We love these outfits styled by Phyllis Evans Baker for a Calvin Klein collaboration with the Marie Claire & Esquire teams. You can find mas on their website, primed for purchase. This is your first post. Edit or delete it, then start writing! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum delenitiatque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    },
    {
        id: 3,
        title: 'NASUAL RISUS SUSCIPIT LOREM',
        slug: 'nasual-risus-suscipit-lorem',
        thumb: 'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/892x472/uploaded_images/9.jpg?t=1521442278',
        description:
            'We love these outfits styled by Phyllis Evans Baker for a Calvin Klein collaboration with the Marie Claire & Esquire teams. You can find mas on their website, primed for purchase. This is your first post. Edit or delete it, then start writing! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum delenitiatque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    },
    {
        id: 4,
        title: 'URNA RISUS',
        slug: 'urna-risus',
        thumb: 'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/892x472/uploaded_images/4.jpg?t=1520920181',
        description:
            'We love these outfits styled by Phyllis Evans Baker for a Calvin Klein collaboration with the Marie Claire & Esquire teams. You can find mas on their website, primed for purchase. This is your first post. Edit or delete it, then start writing! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum delenitiatque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    },
    {
        id: 5,
        title: 'POST FORMAT: IMAGE',
        slug: 'post-format-image',
        thumb: 'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/892x472/uploaded_images/3.jpg?t=1520920118',
        description:
            'We love these outfits styled by Phyllis Evans Baker for a Calvin Klein collaboration with the Marie Claire & Esquire teams. You can find mas on their website, primed for purchase. This is your first post. Edit or delete it, then start writing! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum delenitiatque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    },
    {
        id: 6,
        title: 'EUISMOD IN NULLA',
        slug: 'euismod-in-nulla',
        thumb: 'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/892x472/uploaded_images/6.jpg?t=1521442318',
        description:
            'We love these outfits styled by Phyllis Evans Baker for a Calvin Klein collaboration with the Marie Claire & Esquire teams. You can find mas on their website, primed for purchase. This is your first post. Edit or delete it, then start writing! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum delenitiatque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    },
];

export default blogs;
