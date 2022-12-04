import Footer from "../component/layout/footer";
import Image from "next/image";
import drone from "../public/drone.jpeg";
import drone3 from "../public/drone3.jpeg";
import Navbar2 from "../component/layout/navbar2";

const Around = () => {
  return (
    <div className="">
      <Navbar2 />
      <div className="py-5 mx-auto my-auto text-center ibm bg-blue-50">
        <h1 className="py-1 my-1 mx-auto font-extrabold text-3xl ibm ">
          Innovatory Blue Whale
        </h1>
        <h2>Build, share, and run applications with the Blue Whale</h2>
        <button className="my-3 font-semibold ibm text-white bg-blue-600 border border-blue-600 focus:outline-none hover:bg-gray-200 hover:text-blue-600 hover:border-gray-200 focus:ring-1 focus:ring-gray-200  rounded-full text-xs px-3 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          블루웨일과 함께하기
        </button>
      </div>
      <section className="bg-white">
        <div className="md:px-10 px-10 py-5 my-5 md:py-5 md:m-10 ">
          <div className="flex ibm my-10 px-5">
            <div className="md:m-10">
              <h1 className="md:text-2xl font-bold text-base pb-5 px-3">
                블루웨일은 선박, 드론 등 <br />
                다양한 혁신적인 이동체를 개발하는 회사입니다.
              </h1>
              <p className="md:text-base text-xs px-3">
                애플리케이션을 구성하는 컨테이너들의 쉬운 관리 및 발견을 위해서
                컨테이너들을 논리적인 단위로 그룹화합니다. 쿠버네티스는
                Google에서 15년간 프로덕션 워크로드 운영한 경험을 토대로
                구축되었으며, 커뮤니티에서 제공한 최상의 아이디어와 방법들이
                결합되어 있습니다.
              </p>
            </div>
            <Image
              className="rounded-lg"
              src={drone}
              width={800}
              height={500}
            />
          </div>

          <div className="flex md:m-10 px-5">
            <Image
              className="rounded-lg"
              src={drone3}
              width={800}
              height={500}
            />
            <div className="md:m-10 ibm">
              <h1 className="md:text-2xl font-bold text-base pb-5 px-3">
                무한한 유연성
              </h1>
              <p className="md:text-base text-sm px-3">
                지역적인 테스트든지 글로벌 기업 운영이든지 상관없이,
                쿠버네티스의 유연성은 사용자의 복잡한 니즈를 모두 수용하기
                때문에 사용자의 애플리케이션들을 끊임없고 쉽게 전달할 수
                있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gray-50 ">
          <h1 className="font-semibold md:text-4xl sm:text-3xl text-2xl ibm text-center mx-20 my-10 leading-normal md:pt-20 pt-10">
            블루웨일의 기능
          </h1>
          <div className="md:p-10 md:pb-20 md:mx-20 md:mt-5 place-content-between  md:text-base sm:text-sm text-xs">
            <div className="flex flex-row">
              <div className="container m-3 ibm place-content-evenly p-3 ">
                <h1 className="text-blue-500 font-medium pb-2">
                  스토리지 오케스트레이션
                </h1>
                <p>
                  로컬 스토리지, AWS나 GCP와 같은 퍼블릭 클라우드 공급자 또는
                  NFS, iSCSI, Ceph, Cinder와 같은 네트워크 스토리지 시스템에서
                  원하는 스토리지 시스템을 자동으로 마운트한다.
                </p>
              </div>
              <div className="m-3 ibm">
                <h1 className="text-blue-500 font-medium pb-2">
                  시크릿과 구성 관리
                </h1>
                <p>
                  사용자의 이미지를 다시 빌드하거나 스택 구성의 시크릿을
                  노출하지 않고 시크릿과 애플리케이션 구성을 배포하고
                  업데이트한다.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="container m-3 ibm  place-content-evenly p-3">
                <h1 className="text-blue-500 font-medium pb-2">
                  자동화된 롤아웃과 롤백
                </h1>
                <p>
                  로컬 스토리지, AWS나 GCP와 같은 퍼블릭 클라우드 공급자 또는
                  NFS, iSCSI, Ceph, Cinder와 같은 네트워크 스토리지 시스템에서
                  원하는 스토리지 시스템을 자동으로 마운트한다.
                </p>
              </div>
              <div className="m-3 ibm">
                <h1 className="text-blue-500 font-medium pb-2">배치 실행</h1>
                <p>
                  사용자의 이미지를 다시 빌드하거나 스택 구성의 시크릿을
                  노출하지 않고 시크릿과 애플리케이션 구성을 배포하고
                  업데이트한다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Around;
