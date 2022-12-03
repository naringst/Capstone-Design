import Navbar from "../component/layout/navbar";
import Footer from "../component/layout/footer";
import Image from "next/image";
import drone from "../public/drone.jpeg";
const Around = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-5 mx-auto my-auto text-center  bg-blue-50">
        <h1 className="py-1 my-1 mx-auto font-extrabold text-3xl ibm ">
          Innovatory Blue Whale
        </h1>
        <h2>Build, share, and run applications with the Blue Whale</h2>
        <button className="my-3 font-semibold ibm text-white bg-blue-600 border border-blue-600 focus:outline-none hover:bg-gray-200 hover:text-blue-600 hover:border-gray-200 focus:ring-1 focus:ring-gray-200  rounded-full text-xs px-3 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          블루웨일과 함께하기
        </button>
      </div>
      <div className="p-20 m-20">
        <div className="flex m-5">
          <div className="m-10">
            <h1 className="text-xl">
              K8s라고도 알려진 쿠버네티스는 컨테이너화된 애플리케이션을 <br />
              자동으로 배포, 스케일링 및 관리해주는 오픈소스 시스템입니다.
            </h1>
            <p className="text-sm">
              애플리케이션을 구성하는 컨테이너들의 쉬운 관리 및 발견을 위해서
              컨테이너들을 논리적인 단위로 그룹화합니다. 쿠버네티스는 Google에서
              15년간 프로덕션 워크로드 운영한 경험을 토대로 구축되었으며,
              커뮤니티에서 제공한 최상의 아이디어와 방법들이 결합되어 있습니다.
            </p>
          </div>
          <Image src={drone} width={800} height={500} />
        </div>

        <div className="flex m-5">
          <div className="m-10 ibm">
            <h1 className="text-xl">
              K8s라고도 알려진 쿠버네티스는 컨테이너화된 애플리케이션을 <br />
              자동으로 배포, 스케일링 및 관리해주는 오픈소스 시스템입니다.
            </h1>
            <p className="text-sm">
              애플리케이션을 구성하는 컨테이너들의 쉬운 관리 및 발견을 위해서
              컨테이너들을 논리적인 단위로 그룹화합니다. 쿠버네티스는 Google에서
              15년간 프로덕션 워크로드 운영한 경험을 토대로 구축되었으며,
              커뮤니티에서 제공한 최상의 아이디어와 방법들이 결합되어 있습니다.
            </p>
          </div>
          <Image src={drone} width={800} height={500} />
        </div>
      </div>

      <div className="bg-gray-50">
        <h1 className="font-semibold text-4xl ibm text-center m-20 leading-normal">
          블루웨일의 기능
        </h1>
        <div className="p-20 m-20">
          <div className="flex ">
            <div className="m-3 ibm">
              <h1>자동화된 롤아웃과 롤백</h1>
              <p>
                쿠버네티스는 애플리케이션 또는 애플리케이션의 설정 변경시
                점진적으로 롤아웃하는 동시에 애플리케이션을 모니터링해서 모든
                인스턴스가 동시에 종료되지 않도록 보장한다. 만약 어떤 문제가
                발생하면 쿠버네티스는 변경 사항을 롤백한다. 성장하는
                디플로이먼트 솔루션 생태계를 이용한다.
              </p>
            </div>
            <div className="m-3">
              <h1>자동화된 롤아웃과 롤백</h1>
              <p>
                쿠버네티스는 애플리케이션 또는 애플리케이션의 설정 변경시
                점진적으로 롤아웃하는 동시에 애플리케이션을 모니터링해서 모든
                인스턴스가 동시에 종료되지 않도록 보장한다. 만약 어떤 문제가
                발생하면 쿠버네티스는 변경 사항을 롤백한다. 성장하는
                디플로이먼트 솔루션 생태계를 이용한다.
              </p>
            </div>
          </div>
          <div className="flex ">
            <div className="m-3 ibm">
              <h1>자동화된 롤아웃과 롤백</h1>
              <p>
                쿠버네티스는 애플리케이션 또는 애플리케이션의 설정 변경시
                점진적으로 롤아웃하는 동시에 애플리케이션을 모니터링해서 모든
                인스턴스가 동시에 종료되지 않도록 보장한다. 만약 어떤 문제가
                발생하면 쿠버네티스는 변경 사항을 롤백한다. 성장하는
                디플로이먼트 솔루션 생태계를 이용한다.
              </p>
            </div>
            <div className="m-3">
              <h1>자동화된 롤아웃과 롤백</h1>
              <p>
                쿠버네티스는 애플리케이션 또는 애플리케이션의 설정 변경시
                점진적으로 롤아웃하는 동시에 애플리케이션을 모니터링해서 모든
                인스턴스가 동시에 종료되지 않도록 보장한다. 만약 어떤 문제가
                발생하면 쿠버네티스는 변경 사항을 롤백한다. 성장하는
                디플로이먼트 솔루션 생태계를 이용한다.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="m-3 ibm">
              <h1>자동화된 롤아웃과 롤백</h1>
              <p>
                쿠버네티스는 애플리케이션 또는 애플리케이션의 설정 변경시
                점진적으로 롤아웃하는 동시에 애플리케이션을 모니터링해서 모든
                인스턴스가 동시에 종료되지 않도록 보장한다. 만약 어떤 문제가
                발생하면 쿠버네티스는 변경 사항을 롤백한다. 성장하는
                디플로이먼트 솔루션 생태계를 이용한다.
              </p>
            </div>
            <div className="m-3">
              <h1>자동화된 롤아웃과 롤백</h1>
              <p>
                쿠버네티스는 애플리케이션 또는 애플리케이션의 설정 변경시
                점진적으로 롤아웃하는 동시에 애플리케이션을 모니터링해서 모든
                인스턴스가 동시에 종료되지 않도록 보장한다. 만약 어떤 문제가
                발생하면 쿠버네티스는 변경 사항을 롤백한다. 성장하는
                디플로이먼트 솔루션 생태계를 이용한다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Around;
