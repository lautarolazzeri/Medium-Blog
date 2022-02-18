import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typings';

interface Props {
  posts: [ Post ];
}

export default function Home( {posts}: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />

      <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0'>
        <div className='px-10 space-y-5 '>
          <h1 className="text-6xl max-w-xl font-serif ">
            <span className='underline decoration-green-600 decoration-4'>Welcome</span> to my new Blog, a place to show interesting things.
          </h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Earum reiciendis voluptate omnis. Delectus, quis eius!
          </h2>
        </div>
        <img className='hidden md:inline-flex h-32 lg:h-full' src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="" />
      </div>

    </div>
  )
}

export const getServerSideProps = async() => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author-> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  };
};