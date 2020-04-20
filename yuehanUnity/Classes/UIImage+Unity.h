//
//  UIImage+Unity.h
//  yuehanUnity
//
//  Created by John on 2020/4/16.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface UIImage (Unity)
+ (UIImage *)unity_imageNamed:(NSString *)name size:(CGSize)size;
@end

NS_ASSUME_NONNULL_END
