import { getProviders, signIn } from "next-auth/react";

const Login = ({ providers }) => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full justify-center bg-gray-800">
      <img className="w-96 mb-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1024px-Spotify_logo_with_text.svg.png" alt="" />
      {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] text-white p-4 rounded-full"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}