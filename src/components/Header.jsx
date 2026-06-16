import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import { Show, UserButton, SignInButton, SignIn } from "@clerk/react";
import { useState } from "react";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";

function Header() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target == e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  return (
    <>
      <nav className="py-4 px-4  flex justify-between items-center">
        <Link>
          <img src="./logo.png" className="h-20 px-5" />
        </Link>
        <div className="flex items-center gap-8">
          <Show when="signed-out">
            <SignInButton>
              <Button variant="outline" onClick={() => setShowSignIn(true)}>
                Login
              </Button>
            </SignInButton>
          </Show>
          <Show when="signed-in">
            <Button variant="destructive" className="rounded-full">
              <PenBox size={20} className="mr-2" />
              Post a Job
            </Button>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/my-jobs"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/saved-jobs"
                />
                <UserButton.Action label="manageAccount" />
              </UserButton.MenuItems>
            </UserButton>
          </Show>
        </div>
      </nav>
      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
}

export default Header;
