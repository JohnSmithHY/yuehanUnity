Pod::Spec.new do |s|
  s.name             = 'yuehanUnity'
  s.version          = '1.0.0'
  s.summary          = 'A short description of yuehanUnity.'
  s.description      = <<-DESC
TODO: Add long description of the pod here.
                       DESC
  s.homepage         = 'https://github.com/JohnSmithHY/yuehanUnity'
  # s.screenshots     = 'www.example.com/screenshots_1', 'www.example.com/screenshots_2'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'yangguangweilou@163.com' => 'wywlchangbaishan@163.com' }
  s.source           = { :git => 'https://github.com/JohnSmithHY/yuehanUnity.git', :tag => s.version.to_s }

  s.ios.deployment_target = '8.0'

  s.source_files = 'yuehanUnity/Classes/**/*'
  
   s.resource_bundles = {
     'yuehanUnity' => ['yuehanUnity/Assets/*']
   }

  # s.public_header_files = 'Pod/Classes/**/*.h'
   s.frameworks = 'UIKit'
   s.dependency 'AFNetworking', '~> 2.7'
   s.dependency 'SVGKit'
end
