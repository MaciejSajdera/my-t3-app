import { useSession, signOut, signIn } from "next-auth/react";
import { api } from "../../../utils/api";

export default function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div>
        <p className="text-center text-2xl text-white">
          {sessionData && <span>Logged in as {sessionData.user?.email}</span>}
        </p>
      </div>
      <div>
        <p className="text-center text-2xl text-white">
          {secretMessage && <span>{secretMessage}</span>}
        </p>
      </div>

      <button
        className="btn btn-primary"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
