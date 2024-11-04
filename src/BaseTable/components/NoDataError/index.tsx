import { getCdnUrl } from '../../../utils/general';

const NoDataError = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center p-6'>
      <img className='mb-4' width='95' src={getCdnUrl('/images/cat.svg')} alt='cat' />
      <div className='text-base text-[#000000] font-medium'>
        Looks like the data is taking a capnap!
      </div>
      <div className='text-sm text-[#595959]'>Give us a minute</div>
    </div>
  );
};

export default NoDataError;
