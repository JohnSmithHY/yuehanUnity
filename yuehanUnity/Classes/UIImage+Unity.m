//
//  UIImage+Unity.m
//  yuehanUnity
//
//  Created by John on 2020/4/16.
//

#import "UIImage+Unity.h"
#import <SVGKit/SVGKit.h>
@implementation UIImage (Unity)
+ (UIImage *)unity_imageNamed:(NSString *)name size:(CGSize)size {
    NSString *filePath = [[NSBundle bundleForClass:NSClassFromString(@"UnityConfig")] pathForResource:@"yuehanUnity" ofType:@"bundle"];
    NSBundle *bundle = [NSBundle bundleWithPath:filePath];
    UIImage *image = [UIImage imageNamed:name inBundle:bundle compatibleWithTraitCollection:nil];
    return image;
//    SVGKImage *image = [SVGKImage imageNamed:[NSString stringWithFormat:@"svgImage/%@",name] inBundle:bundle];
//    image.size = size;
//    return image.UIImage;
}
@end
