import React from 'react';
import ModalBase from '../../components/elements/ModalBase';
import PropTypes from 'prop-types';

export default function ModalTanggapan({ open, onClose }) {
  return (
    <ModalBase open={open} onClose={onClose}>
      <div className="flex w-full justify-between items-center px-4 py-2 border-b border-gray-200 ">
        <p className="font-bold font-mono">{'github_link'}</p>
        <div className="flex w-14 justify-between items-start">
          <div className="w-4 h-4 bg-blue-500 rounded-full" />
          <div className="w-4 h-4 bg-indigo-500 rounded-full" />
          <span
            onClick={() => onClose()}
            className="w-4 h-4 bg-indigo-500 rounded-full text-white cursor-pointer p-1"
          >
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 348.333 348.334"
              className="fill-current"
            >
              <path
                d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
		c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
		c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
		l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
		L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="bg-gray-50 p-4 text-gray-700 text-sm rounded-b-xl font-mono">
        {/* <p className="text-gray-400 text-center">{'Choose the repo'}</p> */}
        <p className=" text-gray-400">{'//Dashboard User'}</p>
        <a
          href="https://github.com/angkasa27/react-tailwind-mycomplaint-dashboard"
          rel="noreferrer"
          target="_blank"
          className="hover:text-indigo-500 cursor-pointer"
        >
          {
            '> https://github.com/angkasa27/react-tailwind-mycomplaint-dashboard'
          }
        </a>
        <p className="mt-3 text-gray-400">{'//Dashboard Admin'}</p>
        <a
          href="https://github.com/angkasa27/react-tailwind-mycomplaint-dashboard-admin"
          rel="noreferrer"
          target="_blank"
          className="hover:text-indigo-500 cursor-pointer"
        >
          {
            '> https://github.com/angkasa27/react-tailwind-mycomplaint-dashboard-admin'
          }
        </a>
        <p className="mt-3 text-gray-400">{'//Backend Node'}</p>
        <a
          href="https://github.com/angkasa27/node-mycomplaint"
          rel="noreferrer"
          target="_blank"
          className="hover:text-indigo-500 cursor-pointer"
        >
          {'> https://github.com/angkasa27/node-mycomplaint'}
        </a>
      </div>
    </ModalBase>
  );
}

ModalTanggapan.defaultProps = {
  open: false,
  onClose: () => {},
  handleAction: () => {},
  data: {},
};

ModalTanggapan.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  handleAction: PropTypes.func,
  data: PropTypes.object,
};
