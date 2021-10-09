import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
const BooksSkeleton = () => {
    return (
        <div className="container">
            <h3 className="mt-3">
                <strong>
                    Books List
                </strong>
            </h3>
            <div className="row mt-3">
                <div className="col-md-4 mb-4">
                    <SkeletonTheme color="#ddd" highlightColor="#fff">
                        <Skeleton width={'100%'} height={150}/>
                        <Skeleton className="mt-1" width={'100%'} height={30}/>
                        <div className="d-flex justify-content-between" style={{width:'100%' }}>
                            <div style={{width:'50%'}}>
                                <Skeleton className="mt-1" width={'100%'} height={30}/>
                            </div>
                            <div style={{width:'40%'}}>
                                <Skeleton className="mt-1" width={'100%'} height={30}/>
                            </div>
                        </div>
                    </SkeletonTheme>
                </div>
                <div className="col-md-4 mb-4">
                    <SkeletonTheme color="#ddd" highlightColor="#fff">
                        <Skeleton width={'100%'} height={150}/>
                        <Skeleton className="mt-1" width={'100%'} height={30}/>
                        <div className="d-flex justify-content-between" style={{width:'100%' }}>
                            <div style={{width:'50%'}}>
                                <Skeleton className="mt-1" width={'100%'} height={30}/>
                            </div>
                            <div style={{width:'40%'}}>
                                <Skeleton className="mt-1" width={'100%'} height={30}/>
                            </div>
                        </div>
                    </SkeletonTheme>
                </div>
                <div className="col-md-4 mb-4">
                    <SkeletonTheme color="#ddd" highlightColor="#fff">
                        <Skeleton width={'100%'} height={150}/>
                        <Skeleton className="mt-1" width={'100%'} height={30}/>
                        <div className="d-flex justify-content-between" style={{width:'100%' }}>
                            <div style={{width:'50%'}}>
                                <Skeleton className="mt-1" width={'100%'} height={30}/>
                            </div>
                            <div style={{width:'40%'}}>
                                <Skeleton className="mt-1" width={'100%'} height={30}/>
                            </div>
                        </div>
                    </SkeletonTheme>
                </div>
                <div className="col-md-4 mb-4">
                    <SkeletonTheme color="#ddd" highlightColor="#fff">
                        <Skeleton width={'100%'} height={150}/>
                        <Skeleton className="mt-1" width={'100%'} height={30}/>
                        <div className="d-flex justify-content-between" style={{width:'100%' }}>
                            <div style={{width:'50%'}}>
                                <Skeleton className="mt-1" width={'100%'} height={30}/>
                            </div>
                            <div style={{width:'40%'}}>
                                <Skeleton className="mt-1" width={'100%'} height={30}/>
                            </div>
                        </div>
                    </SkeletonTheme>
                </div>
                <div className="col-md-4 mb-4">
                    <SkeletonTheme color="#ddd" highlightColor="#fff">
                        <Skeleton width={'100%'} height={150}/>
                        <Skeleton className="mt-1" width={'100%'} height={30}/>
                        <div className="d-flex justify-content-between" style={{width:'100%' }}>
                            <div style={{width:'50%'}}>
                                <Skeleton className="mt-1" width={'100%'} height={30}/>
                            </div>
                            <div style={{width:'40%'}}>
                                <Skeleton className="mt-1" width={'100%'} height={30}/>
                            </div>
                        </div>
                    </SkeletonTheme>
                </div>
                <div className="col-md-4 mb-4">
                    <SkeletonTheme color="#ddd" highlightColor="#fff">
                        <Skeleton width={'100%'} height={150}/>
                        <Skeleton className="mt-1" width={'100%'} height={30}/>
                        <div className="d-flex justify-content-between" style={{width:'100%' }}>
                            <div style={{width:'50%'}}>
                                <Skeleton className="mt-1" width={'100%'} height={30}/>
                            </div>
                            <div style={{width:'40%'}}>
                                <Skeleton className="mt-1" width={'100%'} height={30}/>
                            </div>
                        </div>
                    </SkeletonTheme>
                </div>
                
            </div>
        </div>
    )
}

export default BooksSkeleton
