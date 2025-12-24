import { useEffect, useState } from "react";
import api from "../services/api";
import { User, Mail, IdCard, Eye, EyeOff } from "lucide-react";

// Mask Aadhaar function
const maskAadhaar = (aadhaar) => {
  if (!aadhaar) return "";
  const last4 = aadhaar.slice(-4);
  return `XXX XXX ${last4}`;
};

// Format Aadhaar when fully visible -> 1234 1234 1234
const formatAadhaar = (aadhaar) => {
  if (!aadhaar) return "";
  return aadhaar.replace(/(\d{4})(?=\d)/g, "$1 ");
};

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [showAadhaar, setShowAadhaar] = useState(false);

  useEffect(() => {
    api.get("/auth/profile").then((res) => setProfile(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4 flex justify-center">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-10 border border-blue-100">

        {/* Header */}
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
          User Dashboard
        </h2>

        {!profile ? (
          <p className="text-center text-blue-600 text-lg">Loading profile...</p>
        ) : (
          <div className="space-y-8">

            {/* Name Card */}
            <div className="p-6 bg-white border border-blue-200 shadow-md rounded-2xl hover:shadow-xl transition">
              <div className="flex items-center space-x-5">
                <div className="bg-blue-600 p-3 rounded-full shadow-md">
                  <User className="text-white" size={26} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="text-2xl font-bold text-blue-800">{profile.name}</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 bg-white border border-blue-200 shadow-md rounded-2xl hover:shadow-xl transition">
              <div className="flex items-center space-x-5">
                <div className="bg-blue-600 p-3 rounded-full shadow-md">
                  <Mail className="text-white" size={26} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Address</p>
                  <p className="text-xl font-semibold text-blue-800">{profile.email}</p>
                </div>
              </div>
            </div>

            {/* Aadhaar Card */}
            <div className="p-6 bg-white border border-blue-200 shadow-md rounded-2xl hover:shadow-xl transition">
              <div className="flex items-start space-x-5">
                <div className="bg-blue-600 p-3 rounded-full shadow-md">
                  <IdCard className="text-white" size={26} />
                </div>

                <div className="flex-1">
                  <p className="text-sm text-gray-500">Aadhaar Number</p>

                  <p className="text-xl font-bold text-blue-800 tracking-wide">
                    {showAadhaar
                      ? formatAadhaar(profile.aadhaar)
                      : maskAadhaar(profile.aadhaar)
                    }
                  </p>
                </div>

                {/* Show/Hide Button */}
                <button
                  onClick={() => setShowAadhaar(!showAadhaar)}
                  className="p-2 rounded-full hover:bg-blue-100 transition"
                >
                  {showAadhaar ? (
                    <EyeOff className="text-blue-700" size={24} />
                  ) : (
                    <Eye className="text-blue-700" size={24} />
                  )}
                </button>

              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
