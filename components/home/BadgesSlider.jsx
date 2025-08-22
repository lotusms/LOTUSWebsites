'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@/components/global/Slider';

const badges = [
  { name: 'Adobe Illustrator', imagelight: "https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/certs/ailight-qs498qEJy7sJw1gj5ru95ptyavhTxj.webp" },
  { name: 'Adobe Photoshop', imagelight: "https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/certs/pslight-rERliGSKqmzDn2I1DZkMLAk7o72DHm.webp" },
  { name: 'Adobe XD', imagelight: "https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/certs/xdlight-aXzLwTnvktiC8xDkBahvwYTxCnQ1ey.webp" },
  { name: 'UI/UX Design', imagelight: "https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/certs/uiuxlight-IgCKNMJgxIusV6lm8WdAOTkhVw19Dx.webp" },
  { name: 'Meta', imagelight: "https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/certs/metalight-cpfcsDPzHYtvgiL3cJOWoS8M1f7pYB.webp" },
  { name: 'Microsoft', imagelight: "https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/certs/microsoftlight-4aUbeahcUFUbksMthhKfncVbozCdbw.webp" },
  { name: 'SBA', imagelight: "https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/certs/sbalight-zWXe2ciUNetfyqMxDfRqlaODQi9QCl.webp" },
  { name: 'W3', imagelight: "https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/certs/w3light-yuVkskFnJQlid92CkDhOBNhH74uBip.webp" },
  { name: 'Veteran', imagelight: "https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/certs/veteranlight-HFUCvYCRC0EkVbSDrD76HUMxqB07bk.webp" },
];

const BadgesSlider = ({className = "", sliderClassName = ""}) => {
  return (
    <Slider slides={badges} className={className} sliderClassName={sliderClassName}/>
  )
};

BadgesSlider.propTypes = {
  className: PropTypes.string,
  sliderClassName: PropTypes.string,
};

export default BadgesSlider;
