import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import React from "react";
import ReactPlayer from "react-player";

export function MeetTutorCard({ item,setLink ,setVedioModal}) {
  return (
    <div
    onClick={()=>{
      setLink(item?.url)
      setVedioModal(true);
    }}
     className=" w-full md:w-[48%]  min-lg:w-[24%] ">
      <CardHeader floated={false} color="blue-gray p-0 m-0">
        <video className="w-full" autoPlay={false}>
          <source src={item?.url} type="video/mp4" className="object-cover" />
          Your browser does not support the video tag.
        </video>
      </CardHeader>
      <CardBody className="p-2">
        <div className="mb-3 flex items-center justify-between">
          <Typography
            variant="h5"
            color="blue-gray"
            className="font-semibold font-urbanist"
          >
            {item?.name}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            5.0
          </Typography>
        </div>
        <Typography className="mt-0 p-0 font-urbanist font-medium" color="gray">
          {item?.sessionTaken}+ sessions taken
        </Typography>
      </CardBody>

      <div className="bg-lightSucess text-sucess flex items-center  px-4  py-2  gap-x-2 rounded-b-2xl ">
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.427734"
            y="0.5"
            width="30"
            height="30"
            rx="15"
            fill="#089D3B"
          />
          <path
            d="M21.5969 17.7419L21.597 17.7416C21.8051 17.2421 22.2028 16.8282 22.5611 16.4554L22.5679 16.4483L22.5681 16.448L22.5779 16.4378C22.773 16.2338 22.9613 16.037 23.1026 15.8464C23.2492 15.6486 23.3232 15.4859 23.3232 15.3541C23.3232 15.2223 23.249 15.0592 23.1024 14.8611C22.9619 14.6712 22.7753 14.4753 22.5824 14.2728L22.5694 14.2591C22.5603 14.2496 22.5512 14.2401 22.5421 14.2305C22.1885 13.8606 21.8012 13.4553 21.5984 12.9648C21.4005 12.4874 21.392 11.9316 21.3844 11.4317L21.3842 11.4129L21.3842 11.4128C21.3798 11.1193 21.3754 10.8354 21.3383 10.5897C21.3006 10.3405 21.2334 10.1627 21.1284 10.0581C21.0233 9.95317 20.8452 9.88594 20.5961 9.84819C20.3505 9.81095 20.0668 9.80634 19.7733 9.80201L19.7733 9.80201L19.7545 9.80172C19.2545 9.79413 18.6987 9.78569 18.2213 9.58775L18.2211 9.58764C17.7216 9.37952 17.3077 8.98178 16.9348 8.62352L16.9278 8.61675C16.7202 8.41825 16.5195 8.22634 16.3254 8.08302C16.1273 7.93684 15.9641 7.86296 15.832 7.86296C15.7 7.86296 15.5368 7.93685 15.339 8.08282C15.1452 8.22591 14.9451 8.41742 14.7387 8.61509L14.7386 8.61525C14.7291 8.62431 14.7196 8.6334 14.71 8.64251C14.34 8.99613 13.9347 9.38351 13.4441 9.58626L13.3805 9.43223L13.4443 9.58619C12.9669 9.78413 12.4111 9.79257 11.9112 9.80016L11.8924 9.80044L11.8923 9.80044C11.5988 9.80478 11.3149 9.8092 11.0692 9.84634C10.82 9.88401 10.6422 9.95124 10.5375 10.0562C10.4327 10.1613 10.3654 10.3394 10.3277 10.5885C10.2904 10.8341 10.2858 11.1178 10.2815 11.4113L10.2815 11.4113L10.2812 11.4302C10.2736 11.9301 10.2652 12.4859 10.0672 12.9633L10.0671 12.9635C9.85901 13.463 9.46128 13.8769 9.10302 14.2498L9.09624 14.2568C8.89775 14.4644 8.70583 14.6651 8.56251 14.8593C8.41633 15.0573 8.34245 15.2205 8.34245 15.3526C8.34245 15.4846 8.41636 15.6479 8.56222 15.8459C8.70328 16.0374 8.89117 16.2351 9.08539 16.4394L9.09318 16.4476L21.5969 17.7419ZM21.5969 17.7419C21.3989 18.2192 21.3905 18.775 21.3829 19.275L21.3826 19.2938L21.3826 19.2939M21.5969 17.7419L21.3826 19.2939M21.3826 19.2939C21.3783 19.5873 21.3737 19.871 21.3364 20.1167C21.2987 20.3657 21.2314 20.5438 21.1265 20.6489C21.0219 20.7539 20.8441 20.8211 20.5949 20.8588C20.3492 20.8959 20.0653 20.9003 19.7718 20.9047L19.7717 20.9047M21.3826 19.2939L19.7717 20.9047M19.7717 20.9047L19.7529 20.905M19.7717 20.9047L19.7529 20.905M13.4412 21.1189L13.4415 21.119C13.941 21.3272 14.3549 21.7249 14.7277 22.0832L14.7347 22.0899C14.9423 22.2884 15.143 22.4803 15.3372 22.6237C15.5352 22.7698 15.6985 22.8437 15.8305 22.8437C15.9623 22.8437 16.1254 22.7695 16.3235 22.6229C16.5134 22.4824 16.7093 22.2958 16.9118 22.1029L16.9255 22.0899L13.4412 21.1189ZM13.4412 21.1189C12.9638 20.921 12.408 20.9125 11.9081 20.905L11.8893 20.9047L11.8892 20.9047M13.4412 21.1189L11.8892 20.9047M11.8892 20.9047C11.5958 20.9003 11.312 20.8957 11.0664 20.8585C10.8173 20.8207 10.6393 20.7535 10.5341 20.6486C10.4292 20.544 10.3619 20.3662 10.3243 20.117C10.2871 19.8713 10.2827 19.5874 10.2784 19.2939L10.2784 19.2938M11.8892 20.9047L10.2784 19.2938M10.2784 19.2938L10.2781 19.275M10.2784 19.2938L10.2781 19.275M19.7529 20.905C19.253 20.9125 18.6972 20.921 18.2198 21.1189M19.7529 20.905L18.2198 21.1189M18.2198 21.1189C17.7293 21.3217 17.324 21.709 16.9541 22.0626C16.9446 22.0717 16.9351 22.0807 16.9257 22.0897L18.2198 21.1189ZM10.2781 19.275C10.2705 18.7751 10.2621 18.2194 10.0642 17.742M10.2781 19.275L10.0642 17.742M10.0642 17.742C9.86144 17.2515 9.47406 16.8461 9.12044 16.4761C9.11143 16.4667 9.10243 16.4573 9.09346 16.4479L10.0642 17.742ZM23.4852 13.3779L23.4852 13.3779C23.3319 13.2179 23.1814 13.0608 23.0533 12.9063C22.9245 12.751 22.8266 12.6077 22.7728 12.478C22.7239 12.3595 22.6948 12.2035 22.6783 12.0137C22.6618 11.8253 22.6585 11.616 22.655 11.393L22.655 11.3922L22.655 11.3921L22.6549 11.3855C22.6495 11.0236 22.6434 10.6201 22.5664 10.2363C22.4883 9.84741 22.3351 9.46677 22.0265 9.15813C21.7178 8.84941 21.3363 8.69632 20.9471 8.61823C20.5631 8.54119 20.1597 8.53515 19.7994 8.52975L19.7925 8.52965L19.7924 8.52965C19.5691 8.52611 19.3606 8.5228 19.1724 8.50633C18.9836 8.48981 18.8273 8.46086 18.7064 8.41167C18.5767 8.35785 18.4335 8.25999 18.2783 8.13127C18.1238 8.00319 17.9667 7.85268 17.8067 7.69939L17.8067 7.69937L17.7989 7.69191C17.5436 7.44736 17.259 7.17472 16.9418 6.96409C16.6194 6.74995 16.2523 6.59212 15.832 6.59212C15.4118 6.59212 15.0447 6.74995 14.7223 6.96409C14.4051 7.17472 14.1205 7.44737 13.8652 7.69191L13.8574 7.69937L13.8574 7.69939C13.6974 7.85268 13.5403 8.00319 13.3858 8.13127C13.2304 8.26008 13.0872 8.35799 12.9575 8.41179C12.839 8.46075 12.683 8.48977 12.4932 8.50633C12.3047 8.52278 12.0955 8.5261 11.8724 8.52963L11.8717 8.52964L11.8716 8.52965L11.865 8.52975C11.5031 8.53514 11.0996 8.54116 10.7158 8.61824C10.3269 8.69635 9.94627 8.84949 9.63762 9.15813C9.32891 9.46685 9.17581 9.84833 9.09773 10.2375C9.02068 10.6215 9.01464 11.0249 9.00924 11.3852L9.00914 11.3921L9.00914 11.3922C9.00914 11.3922 9.00914 11.3922 9.00914 11.3922C9.0056 11.6155 9.00229 11.824 8.98583 12.0122C8.9693 12.2011 8.94035 12.3574 8.89116 12.4783C8.83733 12.608 8.73948 12.7511 8.61076 12.9063C8.48268 13.0608 8.33217 13.2179 8.17888 13.3779L8.17886 13.3779L8.17141 13.3857C7.92686 13.641 7.65421 13.9256 7.44358 14.2428C7.22945 14.5652 7.07161 14.9323 7.07161 15.3526C7.07161 15.7728 7.22945 16.1399 7.44358 16.4623C7.65421 16.7795 7.92686 17.0641 8.1714 17.3194L8.17886 17.3272L8.17888 17.3272C8.33217 17.4872 8.48268 17.6443 8.61076 17.7988C8.73962 17.9542 8.83756 18.0975 8.89134 18.2273C8.94027 18.3458 8.96927 18.5017 8.98582 18.6914C9.00228 18.8799 9.00559 19.0891 9.00913 19.3122L9.00914 19.3129L9.00914 19.313L9.00924 19.3196C9.01464 19.6815 9.02066 20.085 9.09773 20.4688C9.17585 20.8577 9.32898 21.2383 9.63762 21.547C9.94634 21.8557 10.3278 22.0088 10.717 22.0869C11.101 22.1639 11.5044 22.17 11.8647 22.1754L11.8716 22.1755L11.8717 22.1755C12.095 22.179 12.3035 22.1823 12.4917 22.1988C12.6805 22.2153 12.8368 22.2442 12.9577 22.2934C13.0874 22.3472 13.2305 22.4451 13.3858 22.5738C13.5403 22.7019 13.6974 22.8524 13.8574 23.0057L13.8574 23.0057L13.8651 23.0132C14.1205 23.2577 14.4051 23.5304 14.7223 23.741C15.0447 23.9552 15.4118 24.113 15.832 24.113C16.2523 24.113 16.6194 23.9552 16.9418 23.741C17.259 23.5304 17.5436 23.2577 17.7989 23.0132L17.8067 23.0057L17.8067 23.0057C17.9667 22.8524 18.1238 22.7019 18.2783 22.5738C18.4336 22.445 18.5769 22.3471 18.7066 22.2933C18.8251 22.2444 18.9811 22.2153 19.1709 22.1988C19.3594 22.1823 19.5686 22.179 19.7916 22.1755L19.7924 22.1755L19.7925 22.1755L19.7991 22.1754C20.161 22.17 20.5645 22.1639 20.9483 22.0869C21.3372 22.0088 21.7178 21.8556 22.0265 21.547C22.3351 21.2383 22.4883 20.8577 22.5664 20.4688C22.6434 20.085 22.6495 19.6815 22.6549 19.3196L22.655 19.313L22.655 19.3129C22.6585 19.0896 22.6618 18.8811 22.6783 18.6929C22.6948 18.5041 22.7237 18.3478 22.7729 18.2269C22.8267 18.0972 22.9246 17.9541 23.0533 17.7988C23.1814 17.6443 23.3319 17.4872 23.4852 17.3272L23.4852 17.3272L23.4927 17.3195C23.7372 17.0641 24.0099 16.7795 24.2205 16.4623C24.4347 16.1399 24.5925 15.7728 24.5925 15.3526C24.5925 14.9323 24.4347 14.5652 24.2205 14.2428C24.0099 13.9256 23.7372 13.641 23.4927 13.3857L23.4852 13.3779ZM19.4062 13.0285L19.4061 13.0284C19.2869 12.9094 19.1254 12.8425 18.9571 12.8425C18.7887 12.8425 18.6272 12.9094 18.508 13.0284L18.508 13.0284L14.582 16.9536L13.1561 15.5284L13.1562 15.5284L13.1519 15.5244C13.0315 15.4121 12.8721 15.351 12.7075 15.3539C12.5429 15.3568 12.3858 15.4235 12.2694 15.5399C12.153 15.6564 12.0863 15.8134 12.0834 15.978C12.0805 16.1427 12.1416 16.302 12.2539 16.4224L12.2538 16.4225L12.2579 16.4267L14.1329 18.3017L14.133 18.3017C14.2522 18.4207 14.4137 18.4876 14.582 18.4876C14.7504 18.4876 14.9119 18.4207 15.0311 18.3017L15.0311 18.3017L19.4062 13.9267L19.4062 13.9266C19.5252 13.8074 19.5921 13.6459 19.5921 13.4776C19.5921 13.3092 19.5252 13.1477 19.4062 13.0285Z"
            fill="white"
            stroke="white"
            stroke-width="0.333334"
          />
        </svg>
        IDP-certified IELTS trainer
      </div>
    </div>
  );
}

const HelloWorld = () => {
  return (
    <div>
      <h1 className="text-7xl font-bold mb-8">Hey there, friends</h1>
      <div className="space-y-4">
        <p>
          This content is for pro users! You can sign up and unlock a lifetime
          license above.
        </p>
        <p>
          The rest of this is just jibberish to make it look like theres a bunch
          of code in here :D
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          repellat harum necessitatibus ullam, fugiat ratione officia inventore
          vero cumque nam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
          optio totam? Odit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          quos minima ex consequuntur quam cum est, vitae unde accusamus modi
          earum accusantium quia corporis sapiente et possimus a beatae? Rem
          perferendis magni, corrupti quia asperiores molestiae. Maxime porro
          quidem fugit itaque. Quisquam dignissimos asperiores neque
          exercitationem ab, excepturi maiores quam?
        </p>
      </div>
    </div>
  );
};

export default HelloWorld;
