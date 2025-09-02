import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              未着手
            </h2>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md p-3">
                <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100">
                  サンプルタスク 1
                </h3>
                <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                  これはサンプルのタスクです
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              進行中
            </h2>
            <div className="space-y-3">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md p-3">
                <h3 className="text-sm font-medium text-yellow-900 dark:text-yellow-100">
                  サンプルタスク 2
                </h3>
                <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                  現在作業中のタスクです
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              完了
            </h2>
            <div className="space-y-3">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-3">
                <h3 className="text-sm font-medium text-green-900 dark:text-green-100">
                  サンプルタスク 3
                </h3>
                <p className="text-xs text-green-700 dark:text-green-300 mt-1">
                  完了したタスクです
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            ダークモード機能について
          </h2>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <p>• 右上のボタンでライト/ダーク/システム設定モードを切り替えできます</p>
            <p>• システム設定モードでは、OSの設定に自動的に合わせます</p>
            <p>• 設定はローカルストレージに保存され、ページ再読み込み後も維持されます</p>
            <p>• スムーズなアニメーション付きで切り替わります</p>
          </div>
        </div>
      </main>
    </div>
  );
}